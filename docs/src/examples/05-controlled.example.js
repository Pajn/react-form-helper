import {FormHelper} from 'react-form-helper'
import {TextField} from 'react-material-app'

export class Controlled extends React.Component {
  state = {}

  render() {
    return (
      <FormHelper
        inputComponent={TextField}
        onSave={credentials => this.setState({credentials})}
        onChange={credentials => this.setState({credentials})}
        value={this.state.credentials}
        fields={[{path: ['email'], icon: 'email', label: 'Email'}]}
      />
    )
  }
}
