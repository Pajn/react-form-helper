import {FormHelper} from 'react-form-helper'
import {Checkbox, ProgressButton, TextField} from 'react-material-app'

const authenticate = (credentials = {}) =>
  new Promise(resolve =>
    setTimeout(
      () =>
        resolve({
          credentials,
          success: credentials.password === 'password',
        }),
      1000,
    ),
  )

export class CustomComponents extends React.Component {
  state = {}

  render() {
    return (
      <FormHelper
        saveButton="Login"
        buttonComponent={ProgressButton}
        buttonProps={{
          primary: true,
        }}
        inputComponent={TextField}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
        onSave={credentials =>
          authenticate(credentials).then(result => this.setState(result))
        }
        fields={[
          {path: ['email'], icon: 'email', label: 'Email'},
          {
            path: ['password'],
            icon: 'lock',
            label: 'Password',
            type: 'password',
          },
          {path: ['rememberMe'], component: Checkbox, label: 'Remember Me'},
        ]}
      />
    )
  }
}
