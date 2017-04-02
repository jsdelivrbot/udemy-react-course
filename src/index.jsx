import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

//Youtube API key
const API_KEY = 'AIzaSyDGWBRSpTCIb81ub8SSVu76oQN4gmvvyxY';



// Create a new component. This component should produce html
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    //Perform a search via the youtube API
    YTSearch({
      key: API_KEY,
      term: 'h3h3productions'
    }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo }) }
          videos={this.state.videos} />
      </div>
    );
  }
}

// Put the component into the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
