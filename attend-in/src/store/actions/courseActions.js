import { reduxFirestore, getFirestore } from 'redux-firestore';
import React, { useEffect, useState } from 'react';


export const addStudentCourse = (course) => {

  // 
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    let exists = false
    
    firestore.collection("studentClasses")
      .where("courseId", "==", course.courseId)
      .where("studentId", "==", course.studentId)
      .get()
      .then((querySnapshot) => {
        
        querySnapshot.forEach((doc) => {
          
          if( !! doc.id ) {
            dispatch({ type: 'CREATE_COURSE_DUPLICATE' });
            exists = true
          }
        })
      })
      if( ! exists )
        firestore.collection('studentClasses').add({
          ...course,
        }).then(() => {
          dispatch({ type: 'CREATE_COURSE_SUCCESS' });
        }).catch(err => {
          dispatch({ type: 'CREATE_COURSE_ERROR' }, err);
        });
  }
};

export const addTeacherCourse = (course) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    firestore.collection('teacherClasses').add({
      ...course,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_COURSE_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_COURSE_ERROR' }, err);
    });
  }
};

export const addCourse = (course) => {
  console.log(course)
  console.log("REMOVE WHEN FIXED  __ NEED TO SAVE COURSE TIMES CORRECTLY")
  
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    firestore.collection('courses').add({
      ...course,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_COURSE_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_COURSE_ERROR' }, err);
    });
  }
};


export const checkIn = (course) => {

  return (dispatch, getState, getFirestore) => {
    const firestore = getFirestore();
    firestore.collection('attendance').add({
      courseId: course.courseId,
      studentId: 'asdasd',
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'ATTEND_COURSE_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'ATTEND_COURSE_ERROR' }, err);
    });
  }
};

export const setClassAttendance = (courseId , curValue) => {
  console.log(courseId)
  var newCurValue = !curValue
  const firestore = getFirestore();

  firestore.collection('courses').doc(courseId).update({
    isAttnBeingTaken: newCurValue
  }).then(() => { 
    
    window.location.reload()

  })
    //     dispatch({ type: 'ATTEND_COURSE_SUCCESS' });
    //   })
  


  // return (dispatch, getState, getFirestore) => {
  //   debugger
  //   const firestore = getFirestore();
  //   console.log( firestore.collection('courses').doc(courseId))

  //   firestore.collection('courses').doc(courseId).update({
  //     isAttnBeingTaken: newCurValue
  //   }).then(() => {
  //     dispatch({ type: 'ATTEND_COURSE_SUCCESS' });
  //   }).catch(err => {
  //     dispatch({ type: 'ATTEND_COURSE_ERROR' }, err);
  //   });
  // }
};

