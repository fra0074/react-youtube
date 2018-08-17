import _ from 'lodash';
import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';
import YTSearch from 'youtube-api-search';
import VideoList from './video_list.jsx';
import VideoDetail from './video_detail.jsx'

const API_KEY = "AIzaSyDyFlmyW9Sri5bgsjZ_NQepSM3ODarNj0o";




class App extends Component {

  constructor(props) {
  super(props);
  this.state = {
    videos: [],
    selectedVideo: null
  };

  this.videoSearch("simpson");
}



    // this.setState({videos: videos});


videoSearch = (term) => {

  YTSearch({key: API_KEY, term: term}, (videos) => {
    this.setState({
      videos: videos,
      selectedVideo: videos[0]
     });
  });
}


    render() {
      const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300 )
        return (

          <div className="container-fluid">

            <SearchBar initialValue="this is the initial value passed by props" onSearchTearmChange = {videoSearch} />
            <div className="row">
            <VideoDetail video= {this.state.selectedVideo } />
            <VideoList
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            videos = {this.state.videos} />
            </div>
          </div>
        );
    }
}

export default App;
