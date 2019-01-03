import {FormHelper} from 'react-form-helper'
import Button from '@material-ui/core/Button'
import {TextField} from 'react-material-app'

export class InitialState extends React.Component {
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
        onSave={credentials => this.setState({credentials})}
        value={{email: 'user@example.com'}}
        fields={[{path: ['email'], icon: 'email', label: 'Email'}]}
      />
    )
  }
}
