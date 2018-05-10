import React from 'react'
import renderer from 'react-test-renderer'
import {BrowserInput, BrowserInputProps} from './browser-components'
import {FieldComponentProps, FormHelper, field, fields} from './index'

describe('FormHelper', () => {
  it('should render the passed fields', () => {
    expect(
      renderer.create(
        <FormHelper
          value={{a: 'a'}}
          onSave={() => {}}
          fields={[{path: ['a']}, {path: ['b']}]}
        />,
      ),
    ).toMatchSnapshot()
  })

  it('should render using specified components', () => {
    expect(
      renderer.create(
        <FormHelper
          inputComponent="some-input"
          value={{a: 'a', c: 'c'}}
          onSave={() => {}}
          fields={[
            {path: ['a']},
            {path: ['b']},
            {component: 'other-input', path: ['c']},
            {component: 'other-input', path: ['d']},
          ]}
        />,
      ),
    ).toMatchSnapshot()
  })

  it('should not pass errors to the browser inputs', () => {
    expect(
      renderer.create(
        <FormHelper
          value={{}}
          onSave={() => {}}
          fields={[
            {path: ['a'], error: 'a error'},
            {
              path: ['b'],
              validationError: 'b',
              validations: {b: {text: 'b error'}},
            },
            {
              path: ['c'],
              validations: {c: {text: 'c error', test: () => false}},
            },
          ]}
        />,
      ),
    ).toMatchSnapshot()
  })

  it('should pass errors to custom inputs', () => {
    expect(
      renderer.create(
        <FormHelper
          inputComponent="input"
          value={{c: 'value'}}
          onSave={() => {}}
          fields={[
            {path: ['a'], error: 'a error'},
            {
              path: ['b'],
              validationError: 'b',
              validations: {b: {text: 'b error'}},
            },
            {
              path: ['c'],
              validations: {c: {text: 'c error', test: () => false}},
            },
          ]}
        />,
      ),
    ).toMatchSnapshot()
  })

  it('should not run custom validators on no value', () => {
    expect(
      renderer.create(
        <FormHelper
          inputComponent="input"
          value={{}}
          onSave={() => {}}
          fields={[
            {
              path: ['a'],
              validations: {
                a: {
                  text: 'a error',
                  test: () => {
                    throw 'should not be called'
                  },
                },
              },
            },
          ]}
        />,
      ),
    ).toMatchSnapshot()
  })

  it('should pass errors to untouched inputs if errorOnTouched is true', () => {
    expect(
      renderer.create(
        <FormHelper
          errorOnTouched
          inputComponent="input"
          value={{c: 'value'}}
          onSave={() => {}}
          fields={[
            {path: ['a'], error: 'a error'},
            {
              path: ['b'],
              validationError: 'b',
              validations: {b: {text: 'b error'}},
            },
            {
              path: ['c'],
              validations: {c: {text: 'c error', test: () => false}},
            },
          ]}
        />,
      ),
    ).toMatchSnapshot()
  })

  it('should pass errors to untouched inputs if they are listed in the errorOnTouched array', () => {
    expect(
      renderer.create(
        <FormHelper
          errorOnTouched={['b']}
          inputComponent="input"
          value={{c: 'value'}}
          onSave={() => {}}
          fields={[
            {path: ['a'], error: 'a error'},
            {
              path: ['b'],
              validationError: 'b',
              validations: {b: {text: 'b error'}},
            },
            {
              path: ['c'],
              validations: {c: {text: 'c error', test: () => false}},
            },
          ]}
        />,
      ),
    ).toMatchSnapshot()
  })

  it('should pass additional props down to the field components', () => {
    expect(
      renderer.create(
        <FormHelper
          value={{}}
          onSave={() => {}}
          fields={[{path: ['a'], a: 'A', props: {b: 'B'}}]}
        />,
      ),
    ).toMatchSnapshot()
  })

  it('should support rendering fields based on value', () => {
    expect(
      renderer.create(
        <FormHelper
          value={{a: 'a'}}
          onSave={() => {}}
          fields={[
            value => (value.a === 'a' ? [{path: ['a']}, {path: ['b']}] : []),
            value => (value.b === 'b' ? [{path: ['c']}] : []),
          ]}
        />,
      ),
    ).toMatchSnapshot()
    expect(
      renderer.create(
        <FormHelper
          value={{a: 'a', b: 'b'}}
          onSave={() => {}}
          fields={[
            value => (value.a === 'a' ? [{path: ['a']}, {path: ['b']}] : []),
            value => (value.b === 'b' ? [{path: ['c']}] : []),
          ]}
        />,
      ),
    ).toMatchSnapshot()
  })

  it('should support mapping rendered fields', () => {
    expect(
      renderer.create(
        <FormHelper
          inputComponent="some-input"
          value={{a: 'a', c: 'c'}}
          onSave={() => {}}
          fields={[
            {path: ['a']},
            {path: ['b']},
            {component: 'other-input', path: ['c']},
            {component: 'other-input', path: ['d']},
          ]}
          mapField={field => <div>{field}</div>}
        />,
      ),
    ).toMatchSnapshot()
  })

  it('should pass disabled to the fields', () => {
    expect(
      renderer.create(
        <FormHelper
          value={{a: 'a'}}
          onSave={() => {}}
          fields={[{path: ['a'], disabled: true}, {path: ['b']}]}
        />,
      ),
    ).toMatchSnapshot()

    expect(
      renderer.create(
        <FormHelper
          value={{a: 'a'}}
          onSave={() => {}}
          fields={[
            {path: ['a'], disabled: object => object.a === 'a'},
            {path: ['b'], disabled: object => object.a === 'b'},
          ]}
        />,
      ),
    ).toMatchSnapshot()
  })

  describe('typing helpers', () => {
    type User = {id: string; name: string; birthdate?: Date}

    it('should pass through values', () => {
      expect(
        fields<User>([
          field<User, BrowserInputProps, string>(BrowserInput, {
            path: ['name'],
            label: 'Name',
            onChange: a => {},
            props: {name: 'name'},
          }),
        ]),
      ).toMatchSnapshot()
    })
  })

  describe('dirty check', () => {
    it('should disable the save button if form has not changed', () => {
      expect(
        renderer.create(
          <FormHelper
            value={{a: 'a'}}
            onSave={() => {}}
            fields={[
              {path: ['a'], disabled: object => object.a === 'a'},
              {path: ['b'], disabled: object => object.a === 'b'},
            ]}
            dirtyCheck
            saveButton="save"
          />,
        ),
      ).toMatchSnapshot()
    })

    it('should enable the save button when the form has changed', () => {
      const subject = renderer.create(
        <FormHelper
          value={{a: 'a'}}
          onSave={() => {}}
          fields={[
            {path: ['a'], disabled: object => object.a === 'a'},
            {path: ['b'], disabled: object => object.a === 'b'},
          ]}
          dirtyCheck
          saveButton="save"
        />,
      )
      subject.root
        .findAllByType('input')[0]
        .props.onChange({target: {value: 'c'}})

      expect(subject).toMatchSnapshot()
    })
  })
})
