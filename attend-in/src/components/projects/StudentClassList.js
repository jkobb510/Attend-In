import React from 'react'
import ProjectSummary from './ProjectSummary'
import ClassSummary from './ClassSummary'

import { reduxFirestore, getFirestore } from 'redux-firestore';
import { Link } from 'react-router-dom'
import firebase from 'firebase/app';


const StudentClassList = ({courses, studentClasses, auth}) => {



  console.log('courses',auth)
  console.log('courses',courses)
  console.log('studentClasses',studentClasses)

  var courseList = []

if( !! courses && !! studentClasses && !! auth ) {
  
  courses.forEach(course => {
    studentClasses.forEach(SC => { 
      // Get all users out of studentClasses
      if( SC.courseId == course.id && SC.studentId == auth.uid)
        courseList.push(course)      
    })
  });
}

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


// const StudentClassList = ({studentClasses}) => {

//   console.log('studentClasses',studentClasses)
//   const firestore = getFirestore();

//   let classes = []

//   if( !! studentClasses ) {
//     console.log('ASDASDAD')
//     var courseId = studentClasses[0].courseId

//     firestore.collection('courses').doc(courseId)
//       .get()
//       .then((course) => {
//         console.log(course.data().courseName)
//         classes.push(course.data())
//         console.log(classes)
//       })
//       .then(() => {
//         return (
//           <div className="project-list section">
//           { classes && classes.map(classs => {
//             console.log('classsclasss',classs)
//             return (
//                 <Link to={'/project/' } key={classs.id}>
//                   <ClassSummary classs={classs} />
//                 </Link>
//             )
//           })}
//         </div>
//         )

//       })
//   }
//   return ( <div> </div> )
// }

export default StudentClassList
