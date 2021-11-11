import './App.css';
import EmbedVideo from './EmbedVideo/EmbedVideo';
import { googleAPIKey } from './keys.js';
import { IframeHTMLAttributes } from 'react';
import SearchBar from './Components/SearchBar/SearchBar';

function App() {
  return (
    <div
      className='row'
      row-spacer
      padding-button='10px'
      justify-content='center'
    >
      <div className='col-md-12' id='search'>
        <div className='col-md-12'>
          <div className='col-md-12' id='none2-'>
            <div className='col-md-10' id='none3'>
              <SearchBar />
            </div>
            <div className='col-md-8' id='none1'>
              <EmbedVideo />
            </div>
            <div className='col-md-4' id='none4'>
              {/* Video List*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
