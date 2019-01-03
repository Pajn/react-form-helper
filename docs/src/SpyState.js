import React from 'react'

export function spyState(component) {
  let spy

  component.prototype.setState = function(newState, ...other) {
    if (spy) {
      spy.setState(newState)
    }
    React.Component.prototype.setState.call(this, newState, ...other)
  }

  class SpyState extends React.Component {
    constructor(props) {
      super(props)
      this.state = {}

      spy = this
    }

    render() {
      return JSON.stringify(this.state)
    }
  }

  return [component, SpyState]
}
