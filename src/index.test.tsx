import React from 'react'
import renderer from 'react-test-renderer'
import {FormHelper} from './index'

describe('FormHelper', () => {
  it('should render the passed fields', () => {
    expect(renderer.create(
      <FormHelper
        value={{a: 'a'}}
        onSave={() => {}}
        fields={[
          {path: ['a']},
          {path: ['b']},
        ]}
      />
    )).toMatchSnapshot()
  })

  it('should render using specified components', () => {
    expect(renderer.create(
      <FormHelper
        inputComponent='some-input'
        value={{a: 'a', c: 'c'}}
        onSave={() => {}}
        fields={[
          {path: ['a']},
          {path: ['b']},
          {component: 'other-input', path: ['c']},
          {component: 'other-input', path: ['d']},
        ]}
      />
    )).toMatchSnapshot()
  })

  it('should not pass errors to the browser inputs', () => {
    expect(renderer.create(
      <FormHelper
        value={{}}
        onSave={() => {}}
        fields={[
          {path: ['a'], error: 'a error'},
          {path: ['b'], validationError: 'b', validations: {b: {text: 'b error'}}},
          {path: ['c'], validations: {c: {text: 'c error', validation: () => false}}},
        ]}
      />
    )).toMatchSnapshot()
  })

  it('should pass errors to custom inputs', () => {
    expect(renderer.create(
      <FormHelper
        inputComponent='input'
        value={{c: 'value'}}
        onSave={() => {}}
        fields={[
          {path: ['a'], error: 'a error'},
          {path: ['b'], validationError: 'b', validations: {b: {text: 'b error'}}},
          {path: ['c'], validations: {c: {text: 'c error', validation: () => false}}},
        ]}
      />
    )).toMatchSnapshot()
  })

  it('should not run custom validators on no value', () => {
    expect(renderer.create(
      <FormHelper
        inputComponent='input'
        value={{}}
        onSave={() => {}}
        fields={[
          {path: ['a'], validations: {a: {text: 'a error', validation: () => {throw 'should not be called'}}}},
        ]}
      />
    )).toMatchSnapshot()
  })

  it('should pass errors to untouched inputs if errorOnTouched is true', () => {
    expect(renderer.create(
      <FormHelper
        errorOnTouched
        inputComponent='input'
        value={{c: 'value'}}
        onSave={() => {}}
        fields={[
          {path: ['a'], error: 'a error'},
          {path: ['b'], validationError: 'b', validations: {b: {text: 'b error'}}},
          {path: ['c'], validations: {c: {text: 'c error', validation: () => false}}},
        ]}
      />
    )).toMatchSnapshot()
  })

  it('should pass errors to untouched inputs if they are listed in the errorOnTouched array', () => {
    expect(renderer.create(
      <FormHelper
        errorOnTouched={['b']}
        inputComponent='input'
        value={{c: 'value'}}
        onSave={() => {}}
        fields={[
          {path: ['a'], error: 'a error'},
          {path: ['b'], validationError: 'b', validations: {b: {text: 'b error'}}},
          {path: ['c'], validations: {c: {text: 'c error', validation: () => false}}},
        ]}
      />
    )).toMatchSnapshot()
  })
})
