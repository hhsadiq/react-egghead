import React from 'react';

class Button extends React.Component {
  render() {
    return <HtmlButton>I <Heart /> learning</HtmlButton>
  }
}

const HtmlButton = (props) => <button>{props.children}</button>

class Heart extends React.Component {
  render() {
    const symbol = this.props.children;
    return <span>&hearts;</span>
  }
}
export default Button