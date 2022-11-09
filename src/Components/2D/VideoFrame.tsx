import * as React from "react";
import * as Styles from "../../styles/videoframe.module.css";

interface videoFrameProps
{
    videoSrcURL: string;
    videoTitle: string;
}


const VideoFrame = (props : videoFrameProps) => {

    return(
        <div className={Styles.videoFrame}>
        <iframe style={{border: "0px"}}
        src={props.videoSrcURL}
        title={props.videoTitle}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        width="100%"
        height="100%"
        />
        </div>
    )

}

export default VideoFrame;