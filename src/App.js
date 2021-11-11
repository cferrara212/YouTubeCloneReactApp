import './App.css';
import EmbedVideo from './EmbedVideo/EmbedVideo';
import { googleAPIKey } from './keys.js';
import { IframeHTMLAttributes } from 'react';
import SearchBar from './Components/SearchBar/SearchBar';

function App() {
  return (
    <div className='App'>
      <SearchBar />
      <div className='videoplayer'>
        <body>
          <p>This is the Main App</p>
          <iframe
            title='yplayer'
            id='ytplayer'
            type='text/html'
            width='640'
            height='360'
            src='https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com'
            frameborder='0'
          ></iframe>
        </body>
      </div>
    </div>
  );
}

export default App;
