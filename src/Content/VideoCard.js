import React from 'react';
import ReactPlayer from 'react-player';
import './VideoCard.css'; // Import CSS for styling

const VideoCard = ({ videoUrl, title, description }) => {
  return (
    <div className="video-card">
      <div className="video-wrapper">
        <ReactPlayer
          url={videoUrl}
          width="100%"
          height="100%"
          controls
          light // Show a video thumbnail as a placeholder
        />
      </div>
      <div className="video-info">
        <h3 className="video-title">{title}</h3>
        <p className="video-description">{description}</p>
      </div>
    </div>
  );
};

export default VideoCard;
