import React from 'react';

class People extends React.Component {
  constructor() {
    super()
    this.state = {items: []}
  }

  componentWillMount() {
    fetch('http://swapi.co/api/people/?format=json')
      .then(response => response.json())
      .then( ({results: items}) => this.setState({items}))
  }

  query(e) {
    this.setState({
      query: e.target.value
    })
  }

  render() {
    let items = this.state.items
    const query = this.state.query
    if (query) {
      items = items.filter(item => item.name.toLowerCase().includes(query.toLowerCase()))
    }
    return (
      <div>
        <input type="text" onChange={this.query.bind(this)}/>
        {items.map(item => <h3 key={item.name}>{item.name}</h3>)}
      </div>
    )
  }
}

export default People