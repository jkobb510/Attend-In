import React from 'react'

import { reduxFirestore, getFirestore } from 'redux-firestore';
import { Link } from 'react-router-dom'
import firebase from 'firebase/app';
import UserSummary from './UserSummary';


const StudentRosterList = ({ users, studentClasses, attendance }) => {


  var userList = []
  var userPresentList = []
  var userMissingList = []

  console.log('StudentRosterList',users, studentClasses,attendance )


    // BASE THIS OFF OF JUST THE COURSE AND NOT


  users.forEach(user => {
    studentClasses.forEach(SC => { 
      // Get all users out of studentClasses
      if( SC.studentId == user.id )
        userList.push(user)      
    })
  });

  
  userList.forEach(( user, x ) => {
    attendance.forEach(attn => {
            
      // Get all users out of studentClasses
      if( attn.studentId == user.id ){
        user.isPresent = true
        userPresentList.push(user)
        delete userList[x];
      }   
    })
  });



  return (
    <div className="user-list section row">

        <div className="column left">
          <h5> Present Students </h5>
            <div className="border-dash-right" >
                { userPresentList && userPresentList.map(user1 => {
                  return (
                      <UserSummary key={user1.id} user={user1} />
                  )
                })}

            </div>
        </div>
        <div className="column right">
          <h5> Absent Students </h5>
            <div>
                { userList && userList.map(user2 => {
                  user2.isPresent = false
                  return (
                      <UserSummary key={user2.id} user={user2} />
                  )
                })}
            </div>
        </div>



    </div>
  )
}

export default StudentRosterList
