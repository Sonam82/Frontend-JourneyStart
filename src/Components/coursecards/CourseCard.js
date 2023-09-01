import React from 'react';
import './cstyle.css';

const CourseCard = ({ course }) => {
  return (
    <div className='course'>
      <div className="course-card">
        <div className="course-thumbnail">
          <img src={course.image} alt='image'/>
        </div>
        <div className="course-details">
          <h3>{course.title}</h3>
          <p>Instructor: {course.instructor}</p>
          <button className="enroll-button">Enroll</button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
