import React from 'react'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { connect } from 'react-redux'

import moment from 'moment'
import { auth } from 'firebase'
// import { checkIn } from '../../store/actions/courseActions'

var userProfile;
const ClassSummary = ({course}) => {
  console.log('userProfile',userProfile)
  var M = ''
  var T = ''
  var W = ''
  var TH = ''
  var F = ''

  if( !! course && !! course.courseTime) {
    course.courseTime.forEach(element => {
      if( element.Day == 'M' ) M = 'active'
      if( element.Day == 'T' ) T = 'active'
      if( element.Day == 'W' ) W = 'active'
      if( element.Day == 'TH' ) TH = 'active'
      if( element.Day == 'F' ) F = 'active'
    });
console.log(userProfile.role != 'Teacher')
    // STUDENT
    if( !! course && course.isAttnBeingTaken && userProfile.role != 'Teacher'  )
      return (
        <a href={ './attendance/' + course.id} className="attnBeingTaken">
            <div  className={ "card z-depth-0 project-summary border-radius-20 " + course.isAttnBeingTaken }>
              <div className={"cardBackground border-radius-20-top-only " + course.imageId}>
                <p></p>
              </div>
              <div className="card-content grey-text text-darken-3">
                <span className="card-title "></span>
                  <p className="courseName" >{course.courseName}</p>
                  <p className="courseAbbr" >{course.abbr}</p>
              </div>
              <div>
                <div className="day-of-week">
                  <div className={M}>Mo</div>
                  <div className={T}>Tu</div>
                  <div className={W}>We</div>
                  <div className={TH}>Th</div>
                  <div className={F}>Fr</div>
                </div>
              </div>
            </div>
        </a>
      )
      else if( !! course && ! course.isAttnBeingTaken && userProfile.role != 'Teacher'  )
      return (
          <div  className="card z-depth-0 project-summary border-radius-20 ">
            <div className={ "cardBackground border-radius-20-top-only " + course.imageId}>
              <p></p>
            </div>
            <div className="card-content grey-text text-darken-3">
              <span className="card-title "></span>
                <p className="courseName" >{course.courseName}</p>
                <p className="courseAbbr" >{course.abbr}</p>
            </div>
            <div>
              <div className="day-of-week">
                <div className={M}>Mo</div>
                <div className={T}>Tu</div>
                <div className={W}>We</div>
                <div className={TH}>Th</div>
                <div className={F}>Fr</div>
              </div>
            </div>
          </div>
      )
    else 
      return (
        <a href={ './teacherAttendance/' + course.id} className="attnBeingTaken">
          <div  className="card z-depth-0 project-summary border-radius-20 ">
            <div className={ "cardBackground border-radius-20-top-only " + course.imageId}>
              <p></p>
            </div>
            <div className="card-content grey-text text-darken-3">
              <span className="card-title "></span>
                <p className="courseName" >{course.courseName}</p>
                <p className="courseAbbr" >{course.abbr}</p>
            </div>
            <div>
              <div className="day-of-week">
                <div className={M}>Mo</div>
                <div className={T}>Tu</div>
                <div className={W}>We</div>
                <div className={TH}>Th</div>
                <div className={F}>Fr</div>
              </div>
            </div>
          </div>
        </a>
      )
  }

   else return ( <div></div> )
}

const mapStateToProps = (state) => {
    userProfile = state.firebase.profile

    return userProfile
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'attendance'
  }])
)(ClassSummary)


