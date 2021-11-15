import React from 'react';
import './Video.css';
import { useState } from 'react';

function selectVideo(
  videoIdObj,
  videoTitle,
  videoDescription,
  onVideoSelected
) {
  onVideoSelected(videoIdObj.videoId, videoTitle, videoDescription);
  console.log(videoIdObj);
}

function getCss(imageurl) {
  const _styles = {
    backgroundImage: `url(${imageurl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    height: '160px',
    position: 'relative',
  };
  return _styles;
}

function constructVideoTitles(vidoesData, onVideoSelected) {
  return vidoesData.map(({ snippet, id }, index) => {
    return (
      <div
        className='video'
        key={index}
        onClick={() =>
          selectVideo(id, snippet.title, snippet.description, onVideoSelected)
        }
      >
        <div style={getCss(snippet.thumbnails.high.url)} key={index} />
        <p className='title'>{snippet.title}</p>
        <p className='title'>{snippet.description}</p>
      </div>
    );
  });
}
const Video = ({ data, onVideoSelected }) => {
  return <>{constructVideoTitles(data, onVideoSelected)}</>;
};

export default Video;
