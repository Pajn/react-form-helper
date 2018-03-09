import React from 'react'
import {Omit} from 'recompose'
import {FieldComponentProps, SaveButtonComponentProps} from './index'

export const BrowserButton = ({
  loading: _,
  ...props
}: SaveButtonComponentProps<any>) => <button {...props} />

export type BrowserInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
> &
  FieldComponentProps<string> & {
    divProps?: React.HTMLAttributes<HTMLDivElement>
    labelProps?: React.HTMLAttributes<HTMLLabelElement>
    labelSpanProps?: React.HTMLAttributes<HTMLSpanElement>
  }
export const BrowserInput = ({
  error: _,
  onChange,
  label,
  divProps,
  labelProps,
  labelSpanProps,
  value = '',
  ...props
}: BrowserInputProps) => (
  <div {...divProps}>
    {label ? (
      <label {...labelProps}>
        <span {...labelSpanProps}>{label}</span>
        <input
          {...props}
          value={value}
          onChange={e =>
            onChange((e.target as HTMLInputElement)[
              props.type === 'checkbox' ? 'checked' : 'value'
            ] as string)
          }
        />
      </label>
    ) : (
      <input
        {...props}
        value={value}
        onChange={e =>
          onChange((e.target as HTMLInputElement)[
            props.type === 'checkbox' ? 'checked' : 'value'
          ] as string)
        }
      />
    )}
  </div>
)
