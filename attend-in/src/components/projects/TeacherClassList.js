import React from 'react'
import ProjectSummary from './ProjectSummary'
import ClassSummary from './ClassSummary'

import { reduxFirestore, getFirestore } from 'redux-firestore';
import { Link } from 'react-router-dom'
import firebase from 'firebase/app';


const TeacherClassList = ({courses}) => {
  console.log(courses)

  return (
    <div className="project-list section">
      { courses && courses.map(course => {
        console.log(course)
        return (
            <ClassSummary course={course} />
        )
      })}
    </div>
  )
}

export default TeacherClassList
