import React from 'react'
import ProjectSummary from './ProjectSummary'
import ClassSummary from './ClassSummary'

import { reduxFirestore, getFirestore } from 'redux-firestore';
import { Link } from 'react-router-dom'
import firebase from 'firebase/app';


const TeacherClassList = ({courses, teacherClasses, auth}) => {


  console.log('courses',courses)
  console.log('teacherClasses',teacherClasses)

  var courseList = []

if( !! courses && !! teacherClasses && !! auth )
  courses.forEach(course => {
    teacherClasses.forEach(SC => { 
      // Get all users out of studentClasses
      if( SC.courseId == course.id && SC.studentId == auth.uid)
        courseList.push(course)      
    })
  });


  // if( !! courses && !! studentClasses && !! auth ) {
  
  //   courses.forEach(course => {
  //     teacherClasses.forEach(SC => { 
  //       // Get all users out of studentClasses
  //       if( SC.courseId == course.id && SC.studentId == auth.uid)
  //         courseList.push(course)      
  //     })
  //   });
  // }


  return (
    <div className="project-list section">
      { courseList && courseList.map(course => {
        return (
            <ClassSummary key={course.courseName} course={course} />
        )
      })}
    </div>
  )
}

export default TeacherClassList
