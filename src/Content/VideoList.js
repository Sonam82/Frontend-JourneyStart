import React from 'react';
import VideoCard from './VideoCard';

const VideoList = () => {
  // Sample video data
  const videos = [
    {
      title: 'Video 1',
      videoUrl: 'https://www.youtube.com/watch?v=your-video-id-1',
      description: 'Description for Video 1',
    },
    {
      title: 'Video 2',
      videoUrl: 'https://www.youtube.com/watch?v=your-video-id-2',
      description: 'Description for Video 2',
    },
    // Add more video objects as needed
  ];

  return (
    <div className="video-list">
      {videos.map((video, index) => (
        <VideoCard
          key={index}
          title={video.title}
          videoUrl={video.videoUrl}
          description={video.description}
        />
      ))}
    </div>
  );
};

export default VideoList;
