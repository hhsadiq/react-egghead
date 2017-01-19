import React from 'react'

class Input extends React.Component {
  render() {
    return <input ref="nameInput" type="text" onChange={this.props.update} />
  }
}

Input.propTypes = {
  update(props, propName, component) {
    const obj = props[propName];
    // check if update is of type function
    if (!(obj && obj.constructor && obj.call && obj.apply)) {
      return new Error(`${propName} should be of type function`)
    }
  }
}

export default Input