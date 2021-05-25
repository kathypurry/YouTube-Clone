import React, { Component } from "react"
import VideoPlayer from "./VideoPlayer";


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


    render()
    { console.log(this.state)
        console.log("state is")
    return (
        <div>
            <VideoPlayer base target="_blank" videoId={this.state.selectedVideoId} />
        </div>

    )
  }
}

export default Play;
