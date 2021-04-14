import { reduxFirestore, getFirestore } from 'redux-firestore';

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

export const checkIn = (course) => {

  console.log('HERTE')
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