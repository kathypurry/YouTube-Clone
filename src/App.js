import Header from "./components/Header";
import {Route, Switch} from 'react-router-dom';
import './App.css';
import About from './components/About';
import React, { Component } from 'react';
import Search from "./components/Search";
import youtube from "./api/youtube";
import VideoData from "./components/VideoData";
import VideoPlayer from "./components/VideoPlayer";
import axios from 'axios';

document.onkeypress = function (e) {
  e = e || window.event;

  if (e.keyCode === 12) {
    document.documentElement.classList.toggle("dark-mode");

    document.querySelectorAll('.inverted').forEach((result) => {
      result.classList.toggle('invert');
    })
  }
}

console.log(process.env.REACT_APP_API_KEY)
class App extends Component {
  state = {
    videoInfo: [],
    selectedVideoId: null,
  }

  onVideoSelected = videoId => {
    this.setState({ selectedVideoId: videoId})
  }

  onSearch = async keyword => {
    const response = await youtube.get("./search", {
      params: {
        q: keyword,
      }
    })

    getResults = async () => {
      const API_KEY = process.env.REACT_APP_API_KEY
      const search = this.state
      try {const { data } = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&key=${API_KEY}&type=video&q=dog`)
      this.setState ({
        results: data,
        search: '',
      })
      console.log(API_KEY);
    }

    this.setState({
      videoInfo: response.data.items,
      selectedVideoId: response.data.items[0].id.videoId
    })

    // console.log(this.state)

  }



  render() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path = "/"/>
        <Route path= "/About" component={About} />
      </Switch>
      <Search onSearch={this.onSearch} />
      <VideoData className="inverted" onVideoSelected={this.onVideoSelected} data={this.state.videoInfo} />
      <VideoPlayer videoId={this.state.selectedVideoId} />
    </div>
  );
  }
}


export default App;
