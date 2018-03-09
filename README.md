# react-form-helper

[![Build Status](https://travis-ci.org/pajn/react-form-helper.svg?branch=master)](https://travis-ci.org/pajn/react-form-helper)
[![npm version](https://badge.fury.io/js/react-form-helper.svg)](https://badge.fury.io/js/react-form-helper)
[![License](http://img.shields.io/:license-mit-blue.svg)](http://doge.mit-license.org)

React component for building forms with ease.

## Install

```
yarn add react-form-helper
npm install --save react-form-helper
```

## Usage

react-form-helper accept custom components for form, input and button,
which makes it easy to use with libraries such as react-toolbox and react-mdl.

Example below shows a simple usage using react-toolbox:

```jsx
import {FormHelper} from 'react-form-helper'
import {ProgressButton, Checkbox, TextField} from 'react-material-app'

const SignIn = () =>
  <FormHelper
    saveButton='Login'
    inputComponent={TextField}
    buttonComponent={ProgressButton}
    onSave={credentials => signIn(credentials)}
    value={{}}
    fields={[
      {path: ['email'], icon: 'email', label: 'Email', type: 'email'},
      {path: ['password'], icon: 'lock', label: 'Password', type: 'password'},
      {path: ['rememberMe'], label: 'Remember me', component: Checkbox},
    ]}
  />
)
```

## Docs

Examples and API documentation is available [here](https://pajn.github.io/react-form-helper/).

## License

react-form-helper is dual-licensed under Apache 2.0 and MIT terms.
