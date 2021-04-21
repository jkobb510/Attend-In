import React from 'react'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { connect } from 'react-redux'

import moment from 'moment'
import { auth } from 'firebase'
import { setClassAttendance } from '../../store/actions/courseActions'
import { Link } from 'react-router-dom'





var userProfile;
const BiggerClassSummary = ({course}) => {
 
 
console.log(this)

function setAttendance (course) {
  console.log('course', course)

  setClassAttendance(course.id, course.isAttnBeingTaken)

}


console.log(userProfile.role != 'Teacher')
    if( !! course  ) 
      return (
        // <a href={ './attendance/' + course.id} className="attnBeingTaken">
            <div>
              <div className="text-center">
                  <h1>{course.courseName}</h1>                
                  <h2>{course.abbr}</h2>
              </div>
              <div className="button-row">
                { 
                
                  course.isAttnBeingTaken ?


                  <div className="input-field">
                    <button onClick={() => setAttendance(course)} className="glow-on-hover">End Attendance</button> 
                  </div>

                  : 

                  <div className="input-field">
                    <button onClick={() => setAttendance(course)} className="glow-on-hover">Start Attendance</button> 
                  </div>


                }

                <div className="input-field">

                  <Link to={'/' + course.id + "/view"}>
                    <button type="button" className="glow-on-hover">View Attendance</button>
                  </Link>
                  {/* <Link to={'/' + course.id + "/view"} className="glow-on-hover link">View Attendance</Link> */}
                </div>

                <div className="input-field">
                <Link to={'/' + course.id + "/list"}>
                    <button type="button" className="glow-on-hover">Class List</button>
                  </Link>
                  {/* <Link to={'/' + course.id + "/list"} className="glow-on-hover link">Class List</Link> */}
                </div>

              </div>
            </div>
        // </a>
      )
  
   else return ( <div></div> )
}

const mapDispatchToProps = dispatch => {
  return {
    setClassAttendance: (value) => dispatch(setClassAttendance(value)),
  }
}

const mapStateToProps = (state) => {
    userProfile = state.firebase.profile

    return userProfile
}

export default compose(
  connect(mapDispatchToProps),
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'attendance'
  }])
)(BiggerClassSummary)


