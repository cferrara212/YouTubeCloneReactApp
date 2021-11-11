import React, { useState, useEffect } from 'react';
import styles from './SearchBar.css';

const SearchBar = props => {
  return (
    <div class='row'>
      <div class='column'>
        <div class='card'>
          <body>
            <input
              autocomplete='off'
              class='searchbox'
              type='text'
              name='search'
              placeholder='Search...'
            />
          </body>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
