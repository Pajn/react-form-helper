## 1.0.0

#### Breaking Changes

Don't set a default value if `value` is `undefined`. Custom components must now support set a default value themselves if they are rendering an `<input>` to ensure the component is controlled.

Rename `validation` to test in the `validations` object

Change TS types to disallow additional props in a field. Instead
place additional props inside a props object.
Additional props are still passed on so the code continues to work but
will generate type errors. To fix this change:

```javascript
{
  path: ['property'],
  component: MyComponent,
  additionalProp: true,
}
```

To:

```javascript
{
  path: ['property'],
  component: MyComponent,
  props: {
    additionalProp: true,
  }
}
```

#### New

Add `field`, `fields` and `formProps` functions. These does nothing in runtime but will improve TypeScript checking.

Add `onStatus` prop, giving a parent component access to previously locked in states like validity and dirty checks.

Add `mapField` prop, to gives the parent component the final say in how fields are rendered. This can be used to add a wrapping div with custom styles around every field without having to create a custom component or pass a render function to every field.
