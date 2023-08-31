import React from 'react';
import './cstyle.css'; // Import your CSS file for styling

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <div className="course-thumbnail">
        {/* Replace with course thumbnail image */}
      </div>
      <div className="course-details">
        <h3>{course.title}</h3>
        <p>Instructor: {course.instructor}</p>
        <button className="enroll-button">Enroll</button>
      </div>
    </div>
  );
};

export default CourseCard;