import React, { Component } from "react";
import Search from "./Search";
import youtube from "./youtube";
import VideoData from "./VideoData";
import CK from "./CK.gif";
import VideoPlayer from "./VideoPlayer";

export default class Home extends Component {
  state = {
    videoInfo: [],
    selectedVideoId: null,
  };

  onVideoSelected = (videoId) => {
    this.setState({ selectedVideoId: videoId });
  };

  onSearch = async (keyword) => {
    const response = await youtube.get("./search", {
      params: {
        q: keyword,
      },
    });
    this.setState({
      videoInfo: response.data.items,
      selectedVideoId: response.data.items[0].id.videoId,
    });
    // console.log(this.state)
  };
  render() {
    return (
      <div>
        <Search onSearch={this.onSearch} />
        <div className="v-player">
          <p className="v-player-text">Search for video</p>
          <h1>Welcome to CandyKat</h1>
          <VideoData
            base
            target="_blank"
            className="inverted"
            onVideoSelected={this.onVideoSelected}
            data={this.state.videoInfo}
          />
                <img src={CK} />
          {/* <VideoPlayer base target="_blank" videoId={this.state.selectedVideoId} /> */}
          </div>
        </div>
 master
    );
  }
}
