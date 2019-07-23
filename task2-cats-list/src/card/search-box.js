import React from 'react';

export const Searchbox = props => {
  return (
    <input
      className="search-box"
      type="search"
      placeholder="search cats"
      onChange={props.onSearchChange}
    />
  );
};
