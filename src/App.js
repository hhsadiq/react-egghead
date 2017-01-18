import React from 'react';

class App extends React.Component {
  render() {
    const name = this.props.name
    const age = this.props.age
    return (
      <div>
        <h1>Hello {name}</h1>
        <b>We guess your age is {age}</b>
      </div>
    )
  }
}

App.propTypes = {
  name: React.PropTypes.string.isRequired,
  age: React.PropTypes.number.isRequired
}

App.defaultProps = {
  age: 34
}

export default App