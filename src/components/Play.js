import React, { Component } from "react"
import VideoPlayer from "./VideoPlayer";
import Search from "./Search";
import VideoData from "./VideoData";

class Play extends Component {
    constructor(props){
        super(props)
        this.state = {
            onVideoSelected: props.onVideoSelected,
            data: props.data,
            videoId: props.selectedVideoId,
            videoInfo: [],
            selectedVideoId: null,
        }
    }

    // onVideoSelected = videoId => {
    //     this.setState({ selectedVideoId: videoId})
    //   }


    render()
    { console.log(this.state)
        console.log("state is")
    return (
        <div>
            <VideoPlayer base target="_blank" videoId={this.state.selectedVideoId} />
        </div>


    // <di>
    //     <h1>moo</h1>
    //     <Search onSearch={this.onSearch} />
    //      <VideoData
    //         base target="_blank"
    //         rel="noreferrer"
    //         className="inverted"
    //         onVideoSelected={this.state.onVideoSelected}
    //         data={this.state.videoInfo}
    //         // data={this.state.data}
    //       />{" "}

    //     <VideoPlayer target="_blank" videoId={this.state.videoId} />
    
    )
  }
}

export default Play;
