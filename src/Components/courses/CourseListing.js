import React from 'react';
import CourseCard from '../coursecards/CourseCard'; // Placeholder for course card component
import Header from '../Header/Header';
import Footer from '../footer/Footer';

const CourseListing = () => {
  // Dummy course data (replace with actual data)
  const courses = [
    { id: 1, title: 'Course 1', instructor: 'Instructor A' },
    { id: 2, title: 'Course 2', instructor: 'Instructor B' },
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