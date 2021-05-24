import React, {Component} from 'react'
import VideoPlayer from './VideoPlayer.js'
import VideoData from './VideoData.js'


class Play extends Component {
    constructor(props){
        super(props)
        this.state = {
            onVideoSelected: props.onVideoSelected,
            data: props.data,
            videoId: props.selectedVideoId,
        }
    } 
    
    render() 
    { console.log(this.state)
        console.log("state is")
    return (


    <div>
        <h1>moo</h1>
         <VideoData
            target="_blank"
            className="inverted"
            onVideoSelected={this.state.onVideoSelected}
            data={this.state.data}
          />{" "}
      
        <VideoPlayer target="_blank" videoId={this.state.videoId} />
    </div>
)
}
}

export default Play