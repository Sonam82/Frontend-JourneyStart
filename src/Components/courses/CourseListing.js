import React from 'react';
import CourseCard from '../coursecards/CourseCard';
import './cstyle.css';
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../footer/Footer';
import jsImage from '../../image/js.png';
import html from '../../image/web-design.png';
import css from '../../image/css.jpg';
import node from '../../image/node.jpg';
import rect from '../../image/react.jpg';
import mngdb from '../../image/mongo.png';

const CourseListing = () => {
  const history = useHistory();

  const courses = [
    { id: 1, title: 'HTML', instructor: 'Gaurav Pandey', image: html },
    { id: 2, title: 'CSS', instructor: 'Gaurav Pandey', image: css },
    { id: 3, title: 'JavaScript', instructor: 'Gaurav Pandey', image: jsImage },
    { id: 4, title: 'reactjs', instructor: 'Gaurav Pandey', image: rect },
    { id: 5, title: 'Nodejs', instructor: 'Gaurav Pandey', image: node },
    { id: 6, title: 'Mongodb', instructor: 'Gaurav Pandey', image: mngdb },
  ];

  
  const navigateToHtmlCourse = () => {
    history.push('/Html-content-page');
  };
 const navigateToCssCourse=()=>{
  history.push('/Css-content-page');
 }
 const navigateToJavaScriptCourse=()=>{
  history.push('/Javascript-content-page');
 }


  return (
    <div>
      <Header />
      <h2>Explore Courses</h2>
      <div className="course-grid">
        {courses.map((course) => (
          <div
            key={course.id}
            onClick={navigateToHtmlCourse}
           
          >
            
            <CourseCard course={course} />
          </div>

          
          
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default CourseListing;
