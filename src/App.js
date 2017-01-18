import React from 'react';
import Button from './Button';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      name: 'Ali Raza',
      currentEvent: '---'
    }
    this.update = this.update.bind(this)
  }

  update(e) {
    this.setState({
      name: e.target.value,
      currentEvent: e.type
    })
  }

  render() {
    return (
      <div>
        <Widget update={this.update}/>
        <h1>Hello {this.state.name}</h1>
        <textarea cols="30"
                  rows="30"
                  onKeyPress={this.update}
                  onKeyDown={this.update}
                  onDoubleClick={this.update}
        />
        <h1>{this.state.currentEvent}</h1>
        <Button />
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