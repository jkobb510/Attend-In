import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { reduxFirestore, getFirestore } from 'redux-firestore';
import StudentRosterListAll from './StudentRosterListAll'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'


var courseId = window.location.pathname.split('/')[1]
  console.log('courseId',courseId)

class ViewClassList extends Component {


  render() {

    const { auth, users, studentClasses } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />

    if ( !! studentClasses && ! studentClasses.length > 0 )   window.location.reload()

    if( !! users && !! studentClasses ) {

        // STUDENT RETURN
          return (
            <div className="dashboard container square">
              <div>
              <h3 className="asdasd" >Course Roster</h3> 
              
              
              <Link to={'/teacherAttendance/' + courseId}>
                <button className="logout-btn">Go Back</button> 
              </Link>
            
              </div>
            

              <div className="row">
                <div className="projectsContainer col s12">
 
                <StudentRosterListAll 
                  users={users} 
                  studentClasses={studentClasses}  
                />  

                </div>
              </div>
            </div>
          )
      }
      else return ( 
      <div>
         {/* the oh shit button  */}
         {/* <button onClick={() => auth.signOut() }className="logout-btn">Go Back</button>  */}
      </div> )
  }
}


const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    courses: state.firestore.ordered.courses,
    notifications: state.firestore.ordered.notifications,
    users: state.firestore.ordered.users,
    studentClasses: state.firestore.ordered.studentClasses,
  }
}

const mapClasses = (state) => {
  return { state }
 }


export default compose(
  connect(mapStateToProps),
  connect(mapClasses),
  firestoreConnect([
    { collection: 'studentClasses',
      where: [
        ['courseId', '==', courseId],
      ],
    },
    { collection: 'users',
      where: [
        ['role', '==', 'Student'],
      ],
     },
     { collection: 'teacherClasses' },
     { collection: 'courses' },
     { collection: 'notifications', limit: 3, orderBy: ['time', 'desc']}
  ]),
)(ViewClassList)


