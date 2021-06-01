import React, { Component } from "react"
import VideoPlayer from "./VideoPlayer";


class Play extends Component {
    constructor(props){
        super(props)
        /*
        Thumbs up on use of state at first glance, though I believe the data being passed here
        requires debugging to get your `/video/:id` view to render correctly.
        */ 
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
