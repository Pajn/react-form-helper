import {FormHelper} from 'react-form-helper'

export class BasicForm extends React.Component {
  state = {}

  render() {
    return (
      <FormHelper
        saveButton="Login"
        onSave={credentials => this.setState({credentials})}
        fields={[
          {path: ['email'], label: 'Email'},
          {path: ['password'], label: 'Password', type: 'password'},
          {path: ['rememberMe'], label: 'Remember me', type: 'checkbox'},
        ]}
      />
    )
  }
}
