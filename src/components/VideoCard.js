import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Video from './Video'

class Videocard extends Component {
    // constructor(props){
    //     super(props)
    // }
    render() {
        return (
            <div>
                <main>
                    {
                    this.props.videos.map((video, i) => {
                        return (
                            <Link key={video.id.videoId + i} to={`/video${video.id.videoId}`}>
                                <Video video={video}/>
                            </Link>
                        )
                    })
                    }
                </main>
            </div>
        )
    }
}

export default Videocard