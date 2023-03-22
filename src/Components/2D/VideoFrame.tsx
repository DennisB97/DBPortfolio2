import React from 'react';
import * as Styles from '../../styles/videoframe.module.css';

interface videoFrameProps {
  videoSrcURL: string;
  videoTitle: string;
};

/**
 * VideoFrame component renders an iframe that will be used for the project pages to show youtube clips.
 * @param videoSrcURL takes in the video's src URL.
 * @param videoTitle takes in the video's title.
 */
const VideoFrame = ({videoSrcURL,videoTitle}: videoFrameProps) => {
  return (
    <div className={Styles.videoFrame}>
      <iframe
        style={{ border: '0px' }}
        src={videoSrcURL}
        title={videoTitle}
        allowFullScreen
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default VideoFrame;
