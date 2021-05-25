import Video from "./Video";
import VideoCard from './VideoCard'

const VideoData = ({ data, onVideoSelected }) => {
    return (
        <div className="video-data">
            <div style={{ padding: "20px 0" }} />
                <h3 style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}>
                </h3>
        <Video data={data} onVideoSelected={onVideoSelected} />
        {/* <VideoCard/> */}
        </div>
    )
}

export default VideoData;
