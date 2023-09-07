import React from 'react';
import './html.css';

const HtmlContent = () => {
  return (
    <div className='Main-html-content-div'>
      <h1>HTML Course </h1>
      <div className="html-videos">
      <div className='video'>
      <iframe
    width="200"
    height="150"
    src="https://www.youtube.com/embed/@JourneyStart19"
    title="Video 1"
    frameborder="0"
    allowfullscreen
  ></iframe>          <h2>Video 1</h2>
          <p>Click here to download Notes</p>
        </div>
        <div className='video'>
          <img src="https://cdn.pixabay.com/photo/2016/11/19/15/32/laptop-1839876_1280.jpg" alt="Video 2" />
          <h2>Video 2</h2>
          <p>Click here to download Notes</p>
        </div>
       
        <div className='video'>
          <img src="https://cdn.pixabay.com/photo/2017/03/23/09/34/artificial-intelligence-2167835_1280.jpg" alt="Video 2" />
          <h2>Video 3</h2>
          <p>Click here to download Notes</p>
        </div>
        <div className='video'>
          <img src="https://cdn.pixabay.com/photo/2017/02/05/00/19/web-design-2038872_1280.jpg" alt="Video 2" />
          <h2>Video 4</h2>
          <p>Click here to download Notes</p>
        </div>
        <div className='video'>
          <img src="https://cdn.pixabay.com/photo/2016/11/19/15/32/laptop-1839876_1280.jpg" alt="Video 2" />
          <h2>Video 5</h2>
          <p>Click here to download Notes</p>
        </div>
        <div className='video'>
          <img src="https://cdn.pixabay.com/photo/2016/11/19/15/32/laptop-1839876_1280.jpg" alt="Video 2" />
          <h2>Video 6</h2>
          <p>Click here to download Notes</p>
        </div>
        <div className='video'>
          <img src="https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg" alt="Video 1" />
          <h2>Video 7</h2>
          <p>Click here to download Notes</p>
        </div>
        <div className='video'>
          <img src="https://cdn.pixabay.com/photo/2016/11/19/15/32/laptop-1839876_1280.jpg" alt="Video 2" />
          <h2>Video 8</h2>
          <p>Click here to download Notes</p>
        </div>

       
      </div>
    </div>
  );
};

export default HtmlContent;