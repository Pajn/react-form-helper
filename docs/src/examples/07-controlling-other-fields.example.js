import {FormHelper} from 'react-form-helper'
import {TextField} from 'react-material-app'

export class ControllingOtherFields extends React.Component {
  state = {}

  render() {
    return (
      <FormHelper
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
            onChange: updated => {
              const oldUser = this.state.user || {}

              // Update the displayName only if it matches with the previous name
              return oldUser.name === oldUser.displayName
                ? {...updated, displayName: updated.name}
                : updated
            },
          },
          {
            path: ['displayName'],
            icon: 'account_circle',
            label: 'Display Name',
          },
        ]}
      />
    )
  }
}
