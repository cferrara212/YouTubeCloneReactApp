import React from 'react';
import Comments from '../Comments/Comments';

const Videoplayer = ({ videoId, videoTitle, videoDescription }) => {
  if (!videoId) {
    return (
      <p style={{ textAlign: 'center', fontSize: '18px', fontWeight: 'bold' }}>
        Search for a video
      </p>
    );
  }
  console.log(videoTitle);
  console.log(videoDescription);
  console.log(videoId);
  return (
    <div className='video-player'>
      
      <iframe
        title={videoId}
        className='video-iframe'
        src={`https://www.youtube.com/embed/${videoId}`}
      />
      <h3>{videoTitle}</h3>
      <p>{videoDescription}</p>
      <Comments />
    </div>
  );
};

export default Videoplayer;
