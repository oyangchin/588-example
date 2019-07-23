import React from 'react';

export const CardList = props => {
  return (
    <div className="card-list">
      {props.Cats.map(cats => (
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
  );
};
