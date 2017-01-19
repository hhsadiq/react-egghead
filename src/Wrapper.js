import React from 'react'
import ReactDOM from 'react-dom'
import People from './People'
import App from './App'

class Wrapper extends React.Component {
  mount(component) {
    ReactDOM.render(component, document.getElementById('app-placeholder'))
  }

  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('app-placeholder'))
  }

  render() {
    return (
      <div>
        <button onClick={this.mount.bind(this, <App interval={2000} />)}>
          Mount Misc stuff
        </button>
        <button onClick={this.mount.bind(this, <People />)}>
          Mount people
        </button>
        <button onClick={this.unmount.bind(this)}>UnMount</button>
        <div id="app-placeholder"></div>
      </div>
    )
  }
}

export default Wrapper