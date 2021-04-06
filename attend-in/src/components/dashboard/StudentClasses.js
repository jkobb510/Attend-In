import React from 'react'
import { Link } from 'react-router-dom'

const StudentClasses = ({courses}) => {
          console.log(courses)

  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Student Classes</span>
          <ul className="">
            <li></li>
          </ul>
        </div>
      </div>
    </div>

    // <div className="project-list section">
    //   { courses && courses.map(course => {
    //     console.log(course)
    //     return (
    //       <Link to={'/courses/' + course.id} key={course.id}>
    //         asd
    //       </Link>
    //     )
    //   })}
    // </div>
  )
}

export default StudentClasses


// import moment from 'moment'
// import firebase from 'firebase/app';
// import React, { useState, useEffect, Fragment, useContext } from 'react';
// import { connect } from 'react-redux'
// import { v4 as uuidv4 } from 'uuid';






// const StudentClasses = (props) => {

//   // doc.data().courseId
// firebase.firestore().collection("studentClasses").where("studentId", "==", props.auth.uid)
//       .get()
//       .then((querySnapshot) => {
//           querySnapshot.forEach((doc) => {
//             firebase.firestore().collection("courses").doc(doc.data().courseId)
//               .get()
//               .then((course) => {
//                 console.log(course.data().courseName)
//                  let data = course.data().courseName;
//                  setState({ data: data });
//                 })
//           });
//       })
//       .catch((error) => {
//           console.log("Error getting documents: ", error);
//       });

//   return (
//     <div className="section">
//       <div className="card z-depth-0">
//         <div className="card-content">
//           <span className="card-title">Student Classes</span>

//           <ul className="">
//             <li></li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   )
// }





// const mapStateToProps = (state) => {
//   // console.log(state);
//   return{
//     auth: state.firebase.auth,
//     profile: state.firebase.profile
//   }
// }



// export default connect(mapStateToProps)(StudentClasses)
