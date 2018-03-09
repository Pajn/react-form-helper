---
title: Initial State
imports:
  '{FormHelper}': '../../../cjs/index'
  'Button': 'material-ui/Button'
  '{TextField}': 'react-material-app'
---

```store example
<FormHelper
  saveButton='Save'
  buttonComponent={Button}
  buttonProps={{
    primary: true,
  }}
  inputComponent={TextField}
  onSave={credentials => this.setState({credentials})}
  value={{email: 'user@example.com'}}
  fields={[
    {path: ['email'], icon: 'email', label: 'Email'},
  ]}
/>
```

#### Initial state

Sometimes you need to provide the form with initial state, for example
when you edit an user.

###### Code

```stored example jsx

```

###### Demo

```render
<div>
  {store.example}
</div>
```

###### State

```render
<div>
  <p>
    Credentials: {JSON.stringify(this.state.credentials)}
  </p>
</div>
```
