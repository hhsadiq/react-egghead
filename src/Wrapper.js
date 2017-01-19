import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

class Wrapper extends React.Component {
  mount() {
    ReactDOM.render(<App interval={50000} />, document.getElementById('app-placeholder'))
  }

  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('app-placeholder'))
  }

  render() {
    return (
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>UnMount</button>
        <div id="app-placeholder"></div>
      </div>
    )
  }
}

export default Wrapper