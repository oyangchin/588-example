import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    cats: [],
    searchField: ''
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(cats => this.setState({ cats: cats }))
      .catch();
  }

  render() {
    return (
      <div className="App">
        <h1>Cats List</h1>
        <input className="search-box" type="search" placeholder="search cats" />
        <div className="card-list">
          {this.state.cats.map(cats => (
            <div className="card-container" key={cats.id}>
              <img
                alt="cat"
                src={`https://robohash.org/${cats.id}?set=set4&size=180x180`}
              />
              <h2> {cats.name} </h2>
              <p> {cats.email}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
