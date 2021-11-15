import React, { useState } from 'react';
import './App.css';
import Search from './Components/Search/Search';
import youtubeApi from './Components/Api//Youtube';
import VideoList from './Components/VideoList/VideoList';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';

const App = () => {
  const [videosMetaInfo, setVideosMetaInfo] = useState([]);
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [selectedVideoTitle, setSelectedVideoTitle] = useState(null);
  const [selectedVideoDescription, setSelectedVideoDescription] = useState(null)

  const onVideoSelected = videoId => {
    setSelectedVideoId(videoId);
  };

  const onSearch = async keyword => {
    const response = await youtubeApi.get('/search', {
      params: {
        q: keyword,
      },
    });
    //console.log(response)
    setVideosMetaInfo(
      response.data.items,
      setSelectedVideoId(response.data.items[0].id.videoId),
      setSelectedVideoTitle(response.data.items[0].snippet.title),
      setSelectedVideoDescription(response.data.items[0].snippet.description)
    );
    //console.log(this.state);
  };

  return (
    <div className='App'>
      <Search onSearch={onSearch} />
      <VideoList onVideoSelected={onVideoSelected} data={videosMetaInfo} />
      <VideoPlayer videoId={selectedVideoId} videoTitle={selectedVideoTitle} videoDescription={selectedVideoDescription} />
    </div>
  );
};

export default App;
