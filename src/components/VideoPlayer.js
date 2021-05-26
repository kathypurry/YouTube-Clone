import React, { Component } from "react";
import YouTube from "react-youtube";
import CK from "./CK.gif";


class Videoplayer extends Component {

  videoOnReady(event) {
    event.target.pauseVideo();
  }

  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 1,
      },
    };


    const {videoId} = this.props
      if (!videoId) {
        return (
          <div className="v-player">
             <p className="v-player-text">
              Search for video
            </p>
            <h1>Welcome to CandyKat</h1>
            <img src={CK} />

          </div>
        )
      }

    return <YouTube videoId={videoId} opts={opts} videoOnReady={this.videoOnReady} />;

  }
}

export default Videoplayer;
