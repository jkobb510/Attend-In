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



class Dashboard extends Component {
  render() {
    const { projects, auth, notifications, studentClasses, courses } = this.props;

    if (!auth.uid) return <Redirect to='/signin' />

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">

            {/* <ProjectList projects={projects} /> */}
            <StudentClassList courses={courses} />

          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications notifications={notifications} />
          </div>
        </div>
      </div>
    )
  }
}


const mapClasses = (state) => {
  let classes = []

  let firestore = getFirestore();

  firestore.collection('courses').doc('E6Dt9diLROQS4lM0Oe0P')
  .get()
  .then((course) => {
    classes.push(course.data())
  }).then(() => {
    return {
      classes:classes
    }
  })
}


const mapStateToProps = (state) => {

  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
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
