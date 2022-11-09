import React from "react";
import * as Styles from "../../styles/videoframe.module.css";

type videoFrameProps = {
    videoSrcURL: string;
    videoTitle: string;
}

/**
 * VideoFrame component renders an iframe that will be used for the project pages to show youtube clips.
 * @param props takes in the video's src URL and a title
 */
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