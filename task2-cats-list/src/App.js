import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Cats List</h1>
        <input className="search-box" type="search" placeholder="search cats" />
        <div className="card-list">
          <div className="card-container">
            <img alt="cat" src="https://robohash.org/6?set=set4&size=180x180" />
            <h2> Mrs. Dennis Schulist </h2>
            <p> Karley_Dach@jasper.info </p>
          </div>
          <div className="card-container">
            <img alt="cat" src="https://robohash.org/4?set=set4&size=180x180" />
            <h2> Patricia Lebsack </h2>
            <p> Julianne.OConner@kory.org </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
