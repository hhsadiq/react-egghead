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
        <Widget update={this.update.bind(this)}/>
        <h1>Hello {this.state.name}</h1>
      </div>
    )
  }
}

const Widget = (props) => <input type="text" onChange={props.update} />

export default App