export const checkIn = (blob) => {
  return (dispatch, getState, {getFirestore}) => {

    console.log(new Date().getDay() )
    console.log(new Date() )


    const firestore = getFirestore();
    firestore.collection('attendance').doc( blob.courseId + blob.studentId + new Date().getDay() ).set({
      courseId: blob.courseId,
      studentId: blob.studentId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'ATTEND_COURSE_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'ATTEND_COURSE_ERROR' }, err);
    });
  }
};