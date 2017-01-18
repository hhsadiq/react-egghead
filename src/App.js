import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Ali Raza'
    }
  }

  update(e) {
    this.setState({name: e.target.value})
  }

  render() {
    return (
      <div>
        <Widget update={this.update.bind(this)}/>
        <h1>Hello {this.state.name}</h1>
      </div>
    )
  }
}

const Widget = (props) => <input type="text" onChange={props.update} />


Widget.propTypes = {
  update(props, propName, component) {
    const obj = props[propName];
    // check if update is of type function
    if (!(obj && obj.constructor && obj.call && obj.apply)) {
      return new Error(`${propName} should be of type function`)
    }
  }
}


export default App