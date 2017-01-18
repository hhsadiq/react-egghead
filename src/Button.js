import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <div>
          <HtmlButton>I <Heart /> learning</HtmlButton>
      </div>
    )
  }
}

const HtmlButton = (props) => <button>{props.children}</button>

class Heart extends React.Component {
  render() {
    return <span>&hearts;</span>
  }
}
export default Button