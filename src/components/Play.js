import React, {Component} from 'react'
import Video from './Video.js'
import VideoData from './VideoData'
import VideoPlayer from './VideoPlayer.js'

class Play extends Component {


    render(){
        return(
            <VideoData target="_blank" className="inverted" onVideoSelected={this.onVideoSelected} data={this.state.videoInfo} /> 
        
        )
    }

}




export default Play