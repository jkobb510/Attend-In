import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { reduxFirestore, getFirestore } from 'redux-firestore';
import StudentRosterList from './StudentRosterList'
import { Link } from 'react-router-dom'

var courseId = window.location.pathname.split('/')[1]

var x = 0
while (x < 100) {
  console.log(x)
  x++
}

class ViewClass extends Component {



  render() {

    const { users, studentClasses, attendance } = this.props;

    console.log('WE MADE IT')
    console.log('users', users)
    console.log('studentClasses',studentClasses)

    if ( !! studentClasses && ! studentClasses.length > 0 )   window.location.reload()

    if( !! users && !! studentClasses && !! attendance && studentClasses.length > 0) {
      console.log('WE MADE IT')
      console.log('users', users)
      console.log('studentClasses',studentClasses)


      console.log('KLJLKJKLKJL', window.location)


        // STUDENT RETURN
          return (
            <div className="dashboard container square">
              <div >
              <h3 className="asdasd" >Course Attendance</h3> 
              
              
              <Link to={'/teacherAttendance/' + courseId}>
                <button className="logout-btn">Go Back</button> 
              </Link>
            
              </div>
              <div className="row">
                <div className="projectsContainer col s12">
                <StudentRosterList 
                  users={users} 
                  studentClasses={studentClasses}  
                  attendance={attendance}
                />  

                </div>
              </div>
            </div>
          )
      }
      else return ( <div> </div> )
  }
}


const mapStateToProps = (state) => {
  return {
    users: state.firestore.ordered.users,
    studentClasses: state.firestore.ordered.studentClasses,
    attendance: state.firestore.ordered.attendance,
    
  }
}



export default compose(
  connect(mapStateToProps),
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
    { collection: 'attendance',
     where: [
       ['courseId', '==', courseId],
     ],
    },
    { collection: 'notifications', limit: 3, orderBy: ['time', 'desc']}
  ]),
)(ViewClass)
