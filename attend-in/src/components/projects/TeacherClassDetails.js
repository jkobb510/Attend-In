import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'



const TeacherClassDetails = (props) => {
  const { teacherClasses, auth } = props;
  if (!auth.uid) return <Redirect to='/signin' />
  if (teacherClasses) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{}</span>
            {/* <p>{project.content}</p>s
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
            <div>{moment(project.createdAt.toDate()).calendar()}</div> */}
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  
  const id = ownProps.match.params.id;
  const teacherClasses = state.firestore.data.teacherClasses;
  const sClass = teacherClasses
  return {
    classes: sClass,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'teacherClasses'
  }])
)(TeacherClassDetails)