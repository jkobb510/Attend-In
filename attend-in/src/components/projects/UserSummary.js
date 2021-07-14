import React from 'react'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { connect } from 'react-redux'

import moment from 'moment'
import { auth } from 'firebase'
// import { checkIn } from '../../store/actions/courseActions'

var userProfile;
const UserSummary = ({user}) => {

    return (

      // <a href={ './attendance/' + course.id} className="attnBeingTaken">

        <div className="userSummary">
          <div  className={ "card z-depth-0 user-summary border-radius-20 " + user.isPresent}>
            <div className="card-content grey-text text-darken-3">
              <span className="userName" >{user.firstName} {user.lastName} </span>
            </div>
          </div>
        </div>

      // </a>

    )

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
)(UserSummary)


