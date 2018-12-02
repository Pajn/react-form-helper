import {FormHelper, required, pattern} from 'react-form-helper'
import Button from '@material-ui/core/Button'
import {TextField} from 'react-material-app'

export class RealtimeValidation extends React.Component {
  state = {}

  render() {
    return (
      <FormHelper
        errorOnTouched={this.props.errorOnTouched}
        saveButton="Save"
        buttonComponent={Button}
        buttonProps={{
          primary: true,
        }}
        inputComponent={TextField}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
        onSave={user => this.setState({user})}
        value={this.state.user}
        fields={[
          {
            path: ['name'],
            icon: 'face',
            label: 'Name',
            required: true,
            validations: {
              [required]: {text: 'Name is required'},
            },
          },
          {
            path: ['email'],
            icon: 'email',
            label: 'Email',
            required: true,
            validations: {
              [required]: {text: 'Email is required'},
              format: {
                text: 'Must be valid',
                // test takes a function to validate the field.
                // The provided pattern function takes a Regexp and
                // returns a test function.
                test: pattern(/^[^@]{1,60}@\w{1,50}\.\w{2,15}$/),
              },
            },
          },
          {
            path: ['phone'],
            icon: 'phone',
            label: 'Phone',
            validations: {
              format: {
                text: 'Must be valid',
                test: pattern(/^[0-9]{5,10}$/),
              },
            },
          },
        ]}
      />
    )
  }
}

export class ServerValidation extends React.Component {
  state = {}

  render() {
    return (
      <FormHelper
        saveButton="Save"
        buttonComponent={Button}
        buttonProps={{
          primary: true,
        }}
        inputComponent={TextField}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
        onSave={user => this.setState({user})}
        value={{email: 'admin@example.com'}}
        fields={[
          {
            path: ['email'],
            icon: 'email',
            label: 'Email',
            validationError: 'unique',
            validations: {
              unique: {text: 'The email is already registered'},
            },
          },
        ]}
      />
    )
  }
}
