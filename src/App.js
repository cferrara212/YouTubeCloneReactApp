import './App.css';
import EmbedVideo from './EmbedVideo/EmbedVideo';
import { googleAPIKey } from './keys.js';
import { IframeHTMLAttributes } from 'react';
import SearchBar from './Components/SearchBar/SearchBar';
import { Container,Col,Row } from 'react-bootstrap';
import React from 'react'
import VideoSuggestion from './Components/VideoSuggestion/VideoSuggestion';


function App() {
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