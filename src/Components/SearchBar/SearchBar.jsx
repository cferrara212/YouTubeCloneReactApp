import React, { useState, useEffect } from 'react';
import styles from './SearchBar.css';

const SearchBar = props => {
  return (
    <div class='topnav'>
      <a class='active' href='#home'>
        Home
      </a>
      <div class='search-container'>
        <input type='text' placeholder='Search..' name='search' />
        <button type='submit'>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
