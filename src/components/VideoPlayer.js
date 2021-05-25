import React, { Component } from "react";
import YouTube from "react-youtube";


class Videoplayer extends Component {

  videoOnReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };


    const {videoId} = this.props

    if (!videoId) {
      return (
        <p className="v-player-text">
          Search for video
        </p>
      )
    }

    return <YouTube videoId={videoId} opts={opts} videoOnReady={this.videoOnReady} />;

  }
}

export default Videoplayer;
