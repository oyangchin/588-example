import React, { Component } from 'react';
import './App.css';

import { Searchbox } from './card/search-box';
import { CardList } from './card/card-list';
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
        <Searchbox onSearchChange={this.onSearchChange} />
        <CardList Cats={filteredCats} />
      </div>
    );
  }
}

export default App;
