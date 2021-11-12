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
          let result = await axios.get(`search?maxResults=10&part=snippet&key=${googleAPIKey}&type=video`);
          console.log(result.data.items);
          setSuggested(result.data.items);
         }
      catch(ex){
          console.log('error in API call');
      }    
    };

    //snippet . thumbnails . default . url  for video id, element.id

    const search = async (searchTerm) =>{
    try{
      let result = await axios.get(`search?q=${searchTerm}&maxResults=10&part=snippet&key=${googleAPIKey}&type=video`);
      console.log(result.data.items);
      setSuggested(result.data.items);
     }
  catch(ex){
      console.log('error in API call');
  } 
    }

 
//snippet . thumbnails . default . url  for video id, element.id
  return (
        <Container>
          <Row>
            <Col style={{border:"2px solid blue"}}><SearchBar search={search} /></Col>
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