import React from 'react'

import { reduxFirestore, getFirestore } from 'redux-firestore';
import { Link } from 'react-router-dom'
import firebase from 'firebase/app';
import UserSummaryTable from './UserSummaryTable';
import { Table } from 'reactstrap';



const StudentRosterList = ({ users, studentClasses }) => {


  var userList = []

  console.log('StudentRosterList',users, studentClasses )

  users.forEach(user => {
    studentClasses.forEach(SC => { 
      // Get all users out of studentClasses
      if( SC.studentId == user.id )
        userList.push(user)      
    })
  });

  return (
    <div className="user-list section">
      <Table className="table">
        <thead>
          <tr>
            <th>Initials</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
      { userList && userList.map(user => {
        return (
               <UserSummaryTable key={user.id} user={user} />
        )
      })}
        </tbody>
      </Table>
    </div>
  )
}


export default StudentRosterList
