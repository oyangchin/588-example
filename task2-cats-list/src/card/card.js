import React from 'react';

export const Card = props => {
  return (
    <div className="card-container">
      <img
        alt="cat"
        src={`https://robohash.org/${props.cats.id}?set=set4&size=180x180`}
      />
      <h2> {props.cats.name} </h2>
      <p> {props.cats.email}</p>
    </div>
  );
};
