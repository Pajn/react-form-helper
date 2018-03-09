import {Path, path as getPath} from 'ramda'
import {ReactNode} from 'react'
import {FieldConfig} from './index'
import {required as requiredError} from './validation'

/**
 * Check if two arrays are equal (same length and all elements are ===)
 */
export function isEqual(a: Array<any>, b: Array<any>) {
  if (a.length !== b.length) return false
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false
  }
  return true
}

export function isValid<T>(
  fields: Array<FieldConfig<T, any> | ReactNode>,
  updatedObject: T,
) {
  const validatedFields = [] as Array<FieldConfig<T, any>>
  let valid = true

  for (const field of fields) {
    if (!field || !('path' in (field as any))) {
      validatedFields.push(field as any)
      continue
    }

    const typedField = field as FieldConfig<T, any>

    const value = getValue(typedField.path, updatedObject)
    const required =
      typeof typedField.required === 'function'
        ? typedField.required(updatedObject)
        : typedField.required

    if (required && (value === '' || value === null || value === undefined)) {
      valid = false
      validatedFields.push(
        Object.assign({}, typedField, {validationError: requiredError}),
      )
      continue
    }

    let fieldValid = true
    if (typedField.validations) {
      for (const [type, validation] of Object.entries(typedField.validations)) {
        if (
          value &&
          validation.test &&
          !validation.test(value, updatedObject)
        ) {
          fieldValid = false
          validatedFields.push(
            Object.assign({}, typedField, {validationError: type}),
          )
          break
        }
      }
      if (!fieldValid) {
        valid = false
        continue
      }
    }

    if (typedField.error) {
      valid = false
    }

    if (typedField.validationError) {
      valid = false
    }

    if (fieldValid) {
      validatedFields.push(typedField)
    }
  }

  return {validatedFields, valid}
}

export function getValue<T, V>(path: Path, updatedObject: T): V | undefined {
  return getPath(path, updatedObject)
}
