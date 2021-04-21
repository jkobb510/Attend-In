import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'
import StudentClassList from '../projects/StudentClassList'
import TeacherClasses from './TeacherClasses'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import { reduxFirestore, getFirestore } from 'redux-firestore';
import TeacherClassList from '../projects/TeacherClassList'


class Dashboard extends Component {
  render() {
    
    const { projects, auth, notifications, studentClasses, teacherClasses, courses, profile } = this.props;


    if (!auth.uid) return <Redirect to='/signin' />
    console.log('auth',profile)
    console.log('studentClasses',courses)
    if ( !! profile && !! profile.role  ) {
      if ( profile.role.toLowerCase() === 'student' ) {
      // STUDENT RETURN
        return (
          <div className="dashboard container">
              <h3>Student Dashboard</h3>
            <div className="row">
              <div className="projectsContainer col s12 m7">

                <StudentClassList 
                auth={auth}
                courses={courses} 
                studentClasses={studentClasses}
                />

              </div>
              <div className="col s12 m4 offset-1">
                <Notifications notifications={notifications} />
              </div>
            </div>
          </div>
        )
      }

      else if ( profile.role.toLowerCase() === 'teacher') {
        // TEACHER RETURN
          return (
            
            <div className="dashboard container">
              <h3>Teacher Dashboard</h3>
              <div className="row">
                <div className="projectsContainer col s12 m7">
    
                  <TeacherClassList 
                  auth={auth}
                  courses={courses} 
                  teacherClasses={teacherClasses}
                  />
    
                </div>
                <div className="col s12 m4 offset-1">
                  <Notifications notifications={notifications} />
                </div>
              </div>
            </div>
          )
        }
    }

    else return ( <div>     <div><p> </p></div>  </div> )

  }
}


const mapClasses = (state) => {
 return { state }
}


const mapStateToProps = (state) => {
  console.log('STATATA', state)
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    courses: state.firestore.ordered.courses,
    notifications: state.firestore.ordered.notifications,
    studentClasses: state.firestore.ordered.studentClasses,
    teacherClasses: state.firestore.ordered.teacherClasses

  }
}


export default compose(
  connect(mapClasses),
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects', orderBy: ['createdAt', 'desc']},
    { collection: 'studentClasses' },
    { collection: 'teacherClasses' },
    { collection: 'courses' },
    { collection: 'notifications', limit: 3, orderBy: ['time', 'desc']}
  ]),
)(Dashboard)
