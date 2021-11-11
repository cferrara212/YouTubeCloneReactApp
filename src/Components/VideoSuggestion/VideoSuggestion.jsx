import React, { useState, useEffect, Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import Youtube from 'simple-youtube-api';
import { googleAPIKey } from '../../keys';

const youtube = new Youtube(googleAPIKey);

const VideoSuggestion = props => {
  useEffect(() => {
    callApi();
  }, []);

  const callApi = async () => {
    const result = await youtube.search('React', 5);
    console.log(result);
  };

  return (
    <ListGroup>
      <ListGroup.Item>Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
  );
};

export default VideoSuggestion;
