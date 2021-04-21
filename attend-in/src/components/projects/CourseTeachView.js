import React from 'react'
import BiggerClassSummary from './BiggerClassSummary'

import { reduxFirestore, getFirestore } from 'redux-firestore';
import { Link } from 'react-router-dom'
import firebase from 'firebase/app';


const CourseTeachView = ({courses}) => {

  return (
    <div className="">
          <BiggerClassSummary course={courses} />
    </div>
  )
}

export default CourseTeachView
