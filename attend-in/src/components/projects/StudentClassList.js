import React from 'react'
import ProjectSummary from './ProjectSummary'
import ClassSummary from './ClassSummary'

import { reduxFirestore, getFirestore } from 'redux-firestore';
import { Link } from 'react-router-dom'
import firebase from 'firebase/app';


const StudentClassList = ({courses}) => {
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
