import React from 'react';
import CourseCard from '../coursecards/CourseCard'; // Placeholder for course card component
import './cstyle.css'
import Header from '../Header/Header';
import Footer from '../footer/Footer';
import jsImage from '/Users/GauravPandey/Desktop/DSA/Frontend-JourneyStart/src/image/js.png';
import html from '/Users/GauravPandey/Desktop/DSA/Frontend-JourneyStart/src/image/html.jpg';
import css from '/Users/GauravPandey/Desktop/DSA/Frontend-JourneyStart/src/image/css.jpg';
import node from '/Users/GauravPandey/Desktop/DSA/Frontend-JourneyStart/src/image/node.jpg';
import rect from '/Users/GauravPandey/Desktop/DSA/Frontend-JourneyStart/src/image/react.jpg';
import mngdb from '/Users/GauravPandey/Desktop/DSA/Frontend-JourneyStart/src/image/mongo.png';
import expre from '/Users/GauravPandey/Desktop/DSA/Frontend-JourneyStart/src/image/express.png';
const CourseListing = () => {
  // Dummy course data (replace with actual data)
  const courses = [
    { id: 1, title: 'HTML', instructor: 'Gaurav Pandey',image:html },
    { id: 2, title: 'CSS', instructor: 'Gaurav Pandey',image:css },
    {id:3,title:"JavaScript",instructor:'Gaurav Pandey',image:jsImage},
    {id:4,title:"reactjs",instructor:'Gaurav Pandey',image:rect},
    {id:5,title:"Nodejs",instructor:'Gaurav Pandey',image:node},
    {id:6,title:"Mongodb",instructor:'Gaurav Pandey',image:mngdb},
    {id:7,title:"expressjs",instructor:'Gaurav Pandey',image:expre}

    // ...more courses
  ];

  return (
    <div>
      <Header/>
      <h2>Explore Courses</h2>
      <div className="course-grid">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default CourseListing;