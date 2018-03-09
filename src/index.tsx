import {Path, chain, lensPath, path as getPath, set} from 'ramda'
import React, {
  CSSProperties,
  Component,
  ComponentType,
  ReactChild,
  ReactElement,
  ReactNode,
  ReactType,
  cloneElement,
  isValidElement,
} from 'react'
import {Omit} from 'recompose'
import {BrowserButton, BrowserInput} from './browser-components'
import {getValue, isValid} from './helpers'

export * from './validation'

export type FieldComponentProps<T> = {
  value: T
  onChange: (value: T) => void
  error?: ReactNode
  label?: ReactNode
}
export type SaveButtonComponentProps<T> = {
  type: 'submit'
  value: T
  loading: boolean
  disabled?: boolean
}

export type FormStatus = {
  dirty: boolean
  valid: boolean
  disabled: boolean
  loading: boolean
}

export type FieldConfig<
  T,
  P extends Partial<FieldComponentProps<any>> = Partial<
    FieldComponentProps<any>
  >,
  V = any
> = {
  /**
   * Path to control in the object passed to FormHelper
   */
  path: Array<string>
  /**
   * Component to render, defaults to the inputComponent passed to FormHelper
   */
  component?: ReactType<P>
  render?: (props: any) => ReactNode
  label?: ReactNode
  /**
   * Callback when then field is modified.
   * It receives the full updatedObject for all fields and may return a new object
   * that is used instead.
   *
   * This is useful if you need to change more fields than the specified path.
   */
  onChange?: (updatedObject: T) => any
  /**
   * If the field is required
   */
  required?: boolean | ((object: T) => boolean)
  disabled?: boolean
  /**
   * Specify validation messages and possibly functions
   *
   * Example:
   * ```
   * {
   *   [required]: {
   *     text: 'The field is required',
   *   },
   *   number: {
   *     text: 'Only numbers are allowed',
   *     validation: pattern(/^[0-9]+$/),
   *   },
   * }
   * ```
   */
  validations?: {
    [validationError: string]: {
      text: string
      test?: (value: V, object: T) => boolean
    }
  }
  /**
   * Error in validations to display. The text property of the corresponding
   * field in validations will be displayed. Only set this if you handle
   * errors externally.
   */
  validationError?: string
  /**
   * Error to display, only set this if you handle errors externally
   * and does not use validations.
   */
  error?: string
  /**
   * Extra properties to be passed down to the component
   */
  props?: Omit<P, 'value' | 'onChange'>
}

export type Field<T> =
  | FieldConfig<T, any>
  | ReactNode
  | ((object: T) => Array<FieldConfig<T, any>>)

export type Properties<T> = {
  /**
   * Fields to show in the form
   *
   * Example:
   * ```
   * [
   *   {
   *     path: ['username'],
   *     label: 'Username',
   *   }
   * ]
   * ```
   */
  fields: Array<Field<T>>
  mapField?: (
    rendereField: ReactNode,
    i: number,
    fields: Array<ReactNode>,
  ) => ReactNode
  /**
   * The object the form will manage.
   */
  value: T
  /**
   * Callback when the form is submitted, an updated object is passed as the only prop.
   * If a promise is returned the saveButton component will receive a loading prop set
   * to true until the promise is resolved or rejected.
   */
  onSave: (savedObject: T) => Promise<void> | void
  /**
   * Callback when any field in the form is modified.
   * If this property is set, the form becomes a controlled component and the value
   * prop must be maintained externally.
   *
   * This is useful if you nest multiple FormHelpers or need to restrict user input
   * before it appear on the screen.
   */
  onChange?: (updatedObject: T, isValid: boolean) => void
  /**
   * Allows you to listen on the form status.
   *
   * Will be called when the for initially renders and then every time the status changes
   */
  onStatus?: (status: FormStatus) => void
  /**
   * A string or a renderd React component. This property will be passed as a child
   * to the buttonComponent
   */
  saveButton?: ReactChild
  /**
   * Component used for the form, defaults to a HTML form element.
   *
   * This is useful to set to a div if you nest multiple FormHelpers.
   */
  formComponent?: ReactType
  /**
   * Component used for fields that has not specified a different component.
   * Defaults to a HTML input element.
   *
   * Passed props are:
   *   value: The value for the field
   *   onChange: A function to be called with an updated value
   *   error: A string with an error message (if any)
   *   onBlur: If errorOnTouched is set, a function will be passed that should
   *           be called when the field looses focus.
   *
   * The component will also receive props from the field configuration that are not
   * path, validations or validationError, for example label and required.
   */
  inputComponent?: ReactType
  /**
   * Button component to render the saveButton, defaults to an HTML button element.
   *
   * Passed props are:
   *   disabled: If the button should be disabled
   *   value: The current value of the form
   *   loading: If the form is saving or not
   */
  buttonComponent?: ReactType<SaveButtonComponentProps<T>>
  /**
   * Extra props that should be passed to the button component
   */
  buttonProps?: Object
  /**
   * A style property that is passed to the formComponent
   */
  style?: CSSProperties
  /**
   * An id property that is passed to the formComponent
   */
  formId?: string
  /**
   * Set to true to disable the saveButton if there are no changes
   * @default false
   */
  dirtyCheck?: boolean
  /**
   * Set to true to only show error messages for fields that have been touched.
   * If an array is passed, only validationErrors in that array will be hidden until
   * the field is touched.
   */
  errorOnTouched?: boolean | Array<string>
  /**
   * Set to true to disable the saveButton
   */
  disabled?: boolean
}

export function formProps<T>(properties: Properties<T>) {
  return properties
}
export function fields<T>(fieldConfigs: Array<Field<T>>) {
  return fieldConfigs
}
export function field<T, P extends Partial<FieldComponentProps<V>>, V = any>(
  fieldConfig: Omit<FieldConfig<T, P, V>, 'component'>,
): FieldConfig<T, P, V>
export function field<T, P extends Partial<FieldComponentProps<V>>, V = any>(
  component: ComponentType<P>,
  fieldConfig: Omit<FieldConfig<T, P, V>, 'component'>,
): FieldConfig<T, P, V>
export function field(component: any, fieldConfig?: any) {
  if (fieldConfig === undefined) return component
  else return {...fieldConfig, component}
}

export class FormHelper<T = any> extends Component<
  Properties<any>,
  {
    loading: boolean
    updatedObject: T | null
    touched: {[path: string]: boolean}
  }
> {
  unmounted = false
  state = {
    loading: false,
    updatedObject: null as T | null,
    touched: {} as {[path: string]: boolean},
  }
  status: FormStatus = {
    dirty: false,
    loading: false,
    disabled: false,
    valid: true,
  }

  componentWillMount() {
    this.setFormStatus(this.checkForm())
  }

  componentWillUnmount() {
    this.unmounted = true
  }

  hasFieldChanged(path: Path) {
    return (
      getPath(path, this.state.updatedObject) !==
      getPath(path, this.props.value)
    )
  }

  checkForm(newUpdatedObject?: T) {
    const {dirtyCheck, onChange, disabled} = this.props
    const updatedObject =
      newUpdatedObject === undefined
        ? this.props.onChange === undefined
          ? this.state.updatedObject || this.props.value
          : this.props.value
        : newUpdatedObject
    const fields = chain(
      (field: any) =>
        typeof field === 'function' ? field(updatedObject) : field,
      this.props.fields,
    )
    const {validatedFields, valid} = isValid(fields, updatedObject)
    const dirty = validatedFields.some(
      field =>
        field && !isValidElement(field) && this.hasFieldChanged(field.path),
    )

    const passesDirtyCheck = !dirtyCheck || onChange !== undefined || !dirty
    const allowSubmit = passesDirtyCheck && valid && !disabled

    return {
      updatedObject,
      validatedFields,
      valid,
      dirty,
      disabled: !allowSubmit,
    }
  }

  setLoading(loading: boolean) {
    if (!this.unmounted) {
      this.setState({loading})
      this.setFormStatus({loading})
    }
  }

  setFormStatus(statusChange: Partial<FormStatus>) {
    if (this.props.onStatus !== undefined) {
      let didChange = false
      if (
        statusChange.valid !== undefined &&
        statusChange.valid !== this.status.valid
      ) {
        didChange = true
        this.status.valid = statusChange.valid
      }
      if (
        statusChange.loading !== undefined &&
        statusChange.loading !== this.status.loading
      ) {
        didChange = true
        this.status.loading = statusChange.loading
      }
      if (
        statusChange.dirty !== undefined &&
        statusChange.dirty !== this.status.dirty
      ) {
        didChange = true
        this.status.dirty = statusChange.dirty
      }
      if (
        statusChange.disabled !== undefined &&
        statusChange.disabled !== this.status.disabled
      ) {
        didChange = true
        this.status.disabled = statusChange.disabled
      }

      if (didChange) {
        this.props.onStatus(this.status)
      }
    }
  }

  render() {
    const {
      style,
      disabled: formDisabled,
      fields,
      mapField,
      value,
      onSave,
      onChange,
      onStatus,
      saveButton,
      formComponent: Form = 'form',
      inputComponent: Input = BrowserInput,
      buttonComponent: Button = BrowserButton,
      buttonProps,
      formId,
      dirtyCheck = false,
      errorOnTouched,
    } = this.props
    const {loading} = this.state

    const {
      updatedObject,
      validatedFields,
      valid,
      dirty,
      disabled: submitDisabled,
    } = this.checkForm()

    let renderedFields = validatedFields.map((field: any, i: any) => {
      if (!field) return null
      if (isValidElement(field))
        return cloneElement(field as ReactElement<any>, {key: i})

      const {
        render,
        component,
        path,
        validations,
        validationError,
        props: extraProps,
        disabled,
        ...inputProps
      } = field

      const fieldValue = getValue(field.path, updatedObject)

      if (validationError) {
        const validation = validations && validations[field.validationError]
        inputProps.error = (validation && validation.text) || ''
      }

      if (errorOnTouched) {
        let hideError = !this.state.touched[path.join('.')]
        if (hideError && Array.isArray(errorOnTouched)) {
          hideError = errorOnTouched.includes(validationError)
        }
        if (hideError) {
          const oldBlur = inputProps.onBlur
          inputProps.onBlur = (e: React.FormEvent<any>) => {
            this.setState({
              touched: {
                ...this.state.touched,
                [path.join('.')]: true,
              },
            })

            if (oldBlur) return oldBlur(e)
          }
          inputProps.error = undefined
        }
      }

      const props = {
        key: i,
        ...inputProps,
        value: fieldValue,
        disabled: disabled || formDisabled,
        onChange: (value: any) => {
          let newUpdatedObject = set(lensPath(path), value, updatedObject)
          if (field.onChange) {
            const modifiedObject = field.onChange(newUpdatedObject)
            if (modifiedObject) {
              newUpdatedObject = modifiedObject
            }
          }

          let isValidAfterChange = undefined

          if (onStatus !== undefined) {
            const {valid, dirty, disabled} = this.checkForm(newUpdatedObject!)
            isValidAfterChange = valid
            this.setFormStatus({valid, dirty, disabled})
          }

          if (onChange === undefined) {
            this.setState({updatedObject: newUpdatedObject})
          } else {
            if (isValidAfterChange === undefined) {
              isValidAfterChange = isValid(fields, newUpdatedObject).valid
            }
            onChange(newUpdatedObject!, isValidAfterChange)
          }
        },
      }

      if (render === undefined) {
        const Field = component === undefined ? Input : component
        return <Field {...extraProps} {...props} />
      } else {
        return render(props)
      }
    })

    if (mapField !== undefined) {
      renderedFields = renderedFields.map((field, i) => {
        const mappedField = mapField(field, i, renderedFields)
        return isValidElement(field) && isValidElement(mappedField)
          ? cloneElement<any, any>(mappedField, {key: field.key})
          : mappedField
      })
    }

    return (
      <Form
        id={formId}
        style={style}
        onSubmit={(e: React.MouseEvent<any>) => {
          e.preventDefault()
          if (!submitDisabled) {
            const returnValue = onSave(updatedObject!)
            if (returnValue && returnValue.then && returnValue.catch) {
              this.setLoading(true)
              returnValue
                .catch(error => {
                  this.setLoading(false)
                  throw error
                })
                .then(() => this.setLoading(false))
            }
          }
        }}
      >
        {renderedFields}
        {saveButton && (
          <Button
            type="submit"
            value={updatedObject}
            loading={loading}
            disabled={submitDisabled}
            {...buttonProps}
          >
            {saveButton}
          </Button>
        )}
      </Form>
    )
  }
}
