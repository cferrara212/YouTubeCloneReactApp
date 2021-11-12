import React, { useState} from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://www.googleapis.com/youtube/v3/'

   const SearchBar = (props) => {
   const [search, setSearch] = useState();
   const [suggested, setSuggested] = useState()
  const onChange = (event) => {
      setSearch(event.target.value)
  } 
  
  const onSubmit = async (event) =>{
  props.search(search)
  }

  return (
    <div class='input-group mb-3'>
                   {' '}
      <form onSubmit={onSubmit}>
      <input
        type='text'
        size='lg'
        placeholder='Searc Video ...'
        class='form-control'
        aria-label='Example text with button addon'
        aria-describedby='button-addon2'
        onChange={ onChange }
      />
                   {' '}
      <button class='btn btn-danger' type='submit' id='button-addon1'>
        Search
      </button>
      </form>             
    </div>
  );
};
export default SearchBar;
