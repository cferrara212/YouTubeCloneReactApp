import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Search from './Components/Search/Search';
import youtubeApi from './Components/Api//Youtube';
import VideoList from './Components/VideoList/VideoList';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';
import Comments from './Components/Comments/Comments';

const App = () => {
  const [videosMetaInfo, setVideosMetaInfo] = useState([]);
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [selectedVideoTitle, setSelectedVideoTitle] = useState(null);
  const [selectedVideoDescription, setSelectedVideoDescription] = useState(null);
  const [selectedComments, setSelectedComments] = useState(null);

  const onVideoSelected = (videoId, videoTitle, videoDescription) => {
    setSelectedVideoId(videoId);
    setSelectedVideoTitle(videoTitle);
    setSelectedVideoDescription(videoDescription);
    setSelectedComments();
  };

  
  const onSearch = async keyword => {

    const callComments = await axios.get('http://127.0.0.1:8000/comments/');
      console.log(callComments.data);
      console.log(callComments.data[0].video_id);
      const commentId = callComments.data.map(video_id => 
        callComments.data.video_id = video_id);
      console.log(callComments);

    const response = await youtubeApi.get('/search', {
      params: {
        q: keyword,
      },
    });
    setSelectedVideoId(response.data.items[0].id.videoId);
    setSelectedVideoTitle(response.data.items[0].snippet.title);
    setSelectedVideoDescription(response.data.items[0].snippet.description);

    setVideosMetaInfo(
      response.data.items,
      setSelectedVideoId(response.data.items[0].id.videoId)
    );
  };

  return (
    <div className='App'>
      <Search onSearch={onSearch} />
      <VideoList onVideoSelected={onVideoSelected} data={videosMetaInfo} />
      <VideoPlayer
        videoId={selectedVideoId}
        videoTitle={selectedVideoTitle}
        videoDescription={selectedVideoDescription}/>
    </div>
  );
};

export default App;
