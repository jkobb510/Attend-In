import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import CourseTeachView from './CourseTeachView'
import { Redirect } from 'react-router-dom'
import { reduxFirestore, getFirestore } from 'redux-firestore';
import TeacherClassList from '../projects/TeacherClassList'




class AttendanceTaking extends Component {
  render() {
    
    const { courses } = this.props; 

    console.log('courses',courses)
        return (
          <div className="dashboard container square ">
            <div className="row white-background border-radius-20 ">
              <div className="CourseTeachView s12 border-radius-20 projectsContainer ">
                <CourseTeachView courses={courses} /> 
              </div>

            </div>
          </div>
        )
  }
}



const mapClasses = (state) => {

}


const mapStateToProps = (state) => {
    // console.log(state)
    // var final = state.firebase.ordered.courses
    console.log(state)
    console.log()
  
    var id = window.location.pathname.split('/')[2]
  
    var x = state.firestore.ordered.courses
  
    if( !! x && x.length > 0 ) {
      for (let index = 0; index < x.length; index++) {
       if ( x[index].id === id )
       state.firestore.ordered.courses = x[index] 
      }
    }
  
    return {
      auth: state.firebase.auth,
      profile: state.firebase.profile,
      courses: state.firestore.ordered.courses
    }
  }



export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'courses' },
  ]),

)(AttendanceTaking)
