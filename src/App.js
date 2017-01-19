import React from 'react'
import Button from './Button'
import Input from './Input'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      name: 'Ali Raza',
      descEvent: '---',
      desc: 'Great to learn react'
    }
    this.update = this.update.bind(this)
  }

  update(e) {
    this.setState({
      name: this.nameInput.refs.nameInput.value,
      descEvent: e.type,
      desc: this.desc.value
    })
  }

  render() {
    return (
      <div>
        <Input update={this.update} ref={component => this.nameInput = component}/>
        <h1>Hello {this.state.name}</h1>
        <textarea cols="30"
                  rows="30"
                  ref={node => this.desc = node}
                  onKeyPress={this.update}
                  onKeyDown={this.update}
                  onDoubleClick={this.update}
        />
        <div>
          <p>Desc event: {this.state.descEvent}</p>
          <p>Desc: {this.state.desc}</p>
        </div>
        <Button />
      </div>
    )
  }
}

export default App