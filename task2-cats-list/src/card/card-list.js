import React from 'react';

import { Card } from './../card/card';

export const CardList = props => {
  return (
    <div className="card-list">
      {props.Cats.map(cats => (
        <Card key={cats.id} cats={cats} />
      ))}
    </div>
  );
};
