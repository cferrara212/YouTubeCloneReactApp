import React, { useState, useEffect } from 'react';
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
  const [selectedVideoDescription, setSelectedVideoDescription] =
    useState(null);

  const onVideoSelected = (videoId, videoTitle, videoDescription) => {
    setSelectedVideoId(videoId);
    setSelectedVideoTitle(videoTitle);
    setSelectedVideoDescription(videoDescription);
  };

  const onSearch = async keyword => {
    const response = await youtubeApi.get('/search', {
      params: {
        q: keyword,
      },
    });
    //console.log(response)
    setSelectedVideoId(response.data.items[0].id.videoId);
    setSelectedVideoTitle(response.data.items[0].snippet.title);
    setSelectedVideoDescription(response.data.items[0].snippet.description);

    setVideosMetaInfo(
      response.data.items,
      setSelectedVideoId(response.data.items[0].id.videoId)
    );
    //console.log(this.state);
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
