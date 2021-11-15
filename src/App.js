import './App.css';
import axios from 'axios';
import EmbedVideo from './EmbedVideo/EmbedVideo';
import SearchBar from './Components/SearchBar/SearchBar';
import { Container,Col,Row } from 'react-bootstrap';
import { googleAPIKey } from './keys'
import React, { useState, useEffect} from 'react';
import VideoSuggestion from './Components/VideoSuggestion/VideoSuggestion';
import VideoList from './Components/VideoSuggestion/VideoList';

function App() {
  // this.state = {
  //   videoMetadata: [],
  //   selectedVideId: null
  // };

  axios.defaults.baseURL = 'https://www.googleapis.com/youtube/v3/';

  const [suggested, setSuggested] = useState();

  useEffect(() => {
    callApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const callApi = async () => {
    try {
      let result = await axios.get(
        `search?maxResults=5&part=snippet&key=${googleAPIKey}&type=video`
      );
      //console.log(result.data.items);
      setVideos(result.data);
    } catch (ex) {
      console.log('error in API call');
    }
  };
  function setVideos(data) {
    setSuggested(data);
  }
  //snippet . thumbnails . default . url  for video id, element.id

  const search = async searchTerm => {
    try {
      let result = await axios.get(
        `search?q=${searchTerm}&maxResults=10&part=snippet&key=${googleAPIKey}&type=video`
      );
      console.log(result.data);
      setSuggested(result.data);
    } catch (ex) {
      console.log('error in API call');
    }
  };

  //snippet . thumbnails . default . url  for video id, element.id
  return (
    <Container>
      <Row>
        <Col style={{ border: '2px solid blue' }}>
          <SearchBar search={search} />
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={8} style={{ border: '2px solid blue' }}>
          <EmbedVideo />
        </Col>
        <Col xs={12} lg={4} style={{ border: '2px solid blue' }}>
          {/* <VideoSuggestion suggested={suggested} /> */}
          <VideoList suggested={suggested} />
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={8} style={{ border: '2px solid blue' }}>
          Messages
        </Col>
      </Row>
    </Container>
  );
}

export default App;