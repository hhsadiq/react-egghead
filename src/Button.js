import React from 'react';
import App from './App'
import ReactDOM from 'react-dom';


class Button extends React.Component {
  render() {
    return (
      <div>
          <HtmlButton>I <Heart /> re-rendering app component</HtmlButton>
      </div>
    )
  }
}

const HtmlButton = (props) => <button onClick={() => ReactDOM.render(<App interval={Math.ceil(Math.random() * (2000 - 300) + 300)} />, document.getElementById('app-placeholder'))}>{props.children}</button>

class Heart extends React.Component {
  render() {
    return <span>&hearts;</span>
  }
}
export default Button