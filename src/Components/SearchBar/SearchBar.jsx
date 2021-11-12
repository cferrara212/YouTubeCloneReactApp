const SearchBar = props => {
  return (
    <div class='input-group mb-3'>
                   {' '}
      <input
        type='text'
        size='lg'
        placeholder='Searc Video ...'
        class='form-control'
        aria-label='Example text with button addon'
        aria-describedby='button-addon2'
      />
                   {' '}
      <button class='btn btn-danger' type='button' id='button-addon1'>
        Search
      </button>
                   
    </div>
  );
};
export default SearchBar;
