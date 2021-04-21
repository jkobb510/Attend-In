import React from 'react'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { connect } from 'react-redux'

import moment from 'moment'
import { auth } from 'firebase'
// import { checkIn } from '../../store/actions/courseActions'

var userProfile;
const UserSummaryTable = ({user}) => {
  console.log('dsfsdfsdfsdfsd', user)
  var num = 0
    return (

      // <a href={ './attendance/' + course.id} className="attnBeingTaken">

      <tr>
        <td>{user.initials}</td>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.role} </td>
       </tr>
    
        // <div className="userSummary">
        //   <div  className={ "card z-depth-0 user-summary border-radius-20 " + user.isPresent}>
        //     <div className="card-content grey-text text-darken-3">
        //       <span className="userName" >{user.firstName} {user.lastName} </span>
        //     </div>
        //   </div>
        // </div>

      // </a>

    )
    num ++

}

const mapStateToProps = (state) => {
    userProfile = state.firebase.profile
}

function goBack() {
  var id = window.location.pathname.split('/')[1] // calssid

  console.log(window.location)
  
  window.location.href = '/teacherAttendance/' + id;

}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'attendance'
  }])
)(UserSummaryTable)


