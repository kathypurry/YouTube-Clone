import Video from "./Video";

const VideoData = ({ data, onVideoSelected }) => {
    return (
        <div className="video-data">
            <div style={{ padding: "20px 0" }} />
                <h3 style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}>
                    Videos
                </h3>
        <Video data={data} onVideoSelected={onVideoSelected} />
        </div>
    )
}

export default VideoData;
