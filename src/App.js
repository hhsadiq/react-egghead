import React from 'react'
import Button from './Button'
import Input from './Input'
import ReactDOM from 'react-dom';

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

  // we have access to prop and state and not dom
  componentWillMount() {
    console.log('App component will mount now')
    console.log(`accessing state desc: ${this.state.desc}`)
    console.log(`accessing prop: ${this.props.interval}`)
    this.setState({interval: this.props.interval}, () => {
      this.intervalId = setInterval(() => console.log(Math.random()), this.state.interval)
    })
  }

  componentWillReceiveProps(nextProps, nextContext) {
    console.log('componentWillReceiveProps');
    console.log(nextProps)
    console.log(this.state)
    console.log(nextContext)
    clearInterval(this.intervalId)
    this.intervalId = setInterval(() => console.log(Math.random()), nextProps.interval)
  }


  render() {
    console.log('render called')
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

  // we also have access to dom
  componentDidMount() {
    console.log('App component mounted')
    console.log(ReactDOM.findDOMNode(this))
  }

  componentWillUnmount() {
    console.log('App component will unmount now')
    clearInterval(this.intervalId)
  }
}

export default App