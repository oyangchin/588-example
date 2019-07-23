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

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { cats, searchField } = this.state;
    const filteredCats = cats.filter(cats =>
      cats.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Cats List</h1>
        <input
          className="search-box"
          type="search"
          placeholder="search cats"
          onChange={this.onSearchChange}
        />
        <div className="card-list">
          {filteredCats.map(cats => (
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
