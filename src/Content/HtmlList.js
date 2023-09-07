import React from "react";
import HtmlContent from "./HtmlCard";
const HtmlList=()=>{
    const videos = [
        {
          title: 'Video 1',
          thumbnail: 'https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg',
          description: 'Description for Video 1',
        },
        {
          title: 'Video 2',
          thumbnail: 'url-to-thumbnail-2.jpg',
          description: 'Description for Video 2',
        },
      ];
    
      return (
        <div>
          {videos.map((video, index) => (
            <HtmlContent
              key={index}
              title={video.title}
              thumbnail={video.thumbnail}
              description={video.description}
            />
          ))}
        </div>
      );
}

export default HtmlList;