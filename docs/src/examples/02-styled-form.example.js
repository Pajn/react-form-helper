import {FormHelper} from 'react-form-helper'

export class StyledForm extends React.Component {
  state = {}

  render() {
    return (
      <FormHelper
        saveButton="Login"
        buttonProps={{
          style: {padding: 8, background: 'lightblue', border: 'none'},
        }}
        onSave={credentials => this.setState({credentials})}
        fields={[
          {
            path: ['email'],
            label: 'Email',
            style: {border: '2px solid lightblue'},
            divProps: {style: {padding: 8}},
            labelSpanProps: {style: {display: 'inline-block', width: 120}},
          },
          {
            path: ['password'],
            label: 'Password',
            type: 'password',
            style: {border: '2px solid lightblue'},
            divProps: {style: {padding: 8}},
            labelSpanProps: {style: {display: 'inline-block', width: 120}},
          },
          {
            path: ['rememberMe'],
            label: 'Remember me',
            type: 'checkbox',
            divProps: {style: {padding: 8}},
            labelSpanProps: {style: {display: 'inline-block', width: 120}},
          },
        ]}
      />
    )
  }
}
