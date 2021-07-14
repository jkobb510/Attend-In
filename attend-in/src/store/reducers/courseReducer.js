
const initState = {}

const courseReducer = (state = initState, action) => {


  switch (action.type) {
    case 'CREATE_COURSE_SUCCESS':
      console.log('create course success');
      return state;
    case 'CREATE_COURSE_ERROR':
      console.log('create course error');
      return state;
    case 'CREATE_COURSE_DUPLICATE':
      console.log('You have already added this course');
      return state;
    default:
      return state;
  }
};

export default courseReducer;