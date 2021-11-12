import './App.css';
import axios from 'axios';
import EmbedVideo from './EmbedVideo/EmbedVideo';
import SearchBar from './Components/SearchBar/SearchBar';
import { Container,Col,Row } from 'react-bootstrap';
import { googleAPIKey } from './keys'
import React, { useState, useEffect} from 'react';
import VideoSuggestion from './Components/VideoSuggestion/VideoSuggestion';



function App() {

  axios.defaults.baseURL = 'https://www.googleapis.com/youtube/v3/'

  
    const [suggested, setSuggested] = useState()
  
    useEffect(() => {
      callApi();
    }, []);
  
    const callApi = async () => {
      try{
          let result = await axios.get(`search?q=ammount=1&key=${googleAPIKey}`);
          console.log(result.data.items[2].id.videoId);
          setSuggested(result.data.items[2].id.videoId);
         }
      catch(ex){
          console.log('error in API call');
      }    
    };


  return (
        <Container>
          <Row>
            <Col style={{border:"2px solid blue"}}><SearchBar /></Col>
          </Row>
          <Row>
            <Col xs={12} lg={8} style={{border:"2px solid blue"}}>
              <EmbedVideo />
              </Col>
            <Col xs={12} lg={4} style={{border:"2px solid blue"}}>
              <VideoSuggestion />
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={8} style={{border:"2px solid blue"}}>Messages</Col>
           
          </Row>
        </Container>
  );
}

export default App;