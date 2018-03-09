---
title: Custom components
imports:
  '{FormHelper}': '../../../cjs/index'
  '{Checkbox, ProgressButton, TextField}': 'react-material-app'
---

```store example
<FormHelper
  saveButton='Login'
  buttonComponent={ProgressButton}
  buttonProps={{
    primary: true,
  }}
  inputComponent={TextField}
  style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}
  onSave={credentials =>
    this.authenticate(credentials)
      .then(result => this.setState(result))
  }
  fields={[
    {path: ['email'], icon: 'email', label: 'Email'},
    {path: ['password'], icon: 'lock', label: 'Password', type: 'password'},
    {path: ['rememberMe'], component: Checkbox, label: 'Remember Me'},
  ]}
/>
```

```store
this.authenticate = (credentials = {}) => new Promise(resolve => setTimeout(() =>
  resolve({
    credentials,
    success: credentials.password === 'password'
  })
, 1000))
```

#### Custom components

If you need even more control than adding extra props can give you, you
can override all of the components that the FormHelper renders.

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
  <p>
    Success: {JSON.stringify(this.state.success)}
  </p>
</div>
```
