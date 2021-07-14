import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'



const StudentClassDetails = (props) => {
  const { studentClasses, auth } = props;
  if (!auth.uid) return <Redirect to='/signin' />
  if (studentClasses) {
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
  const studentClasses = state.firestore.data.studentClasses;
  const sClass = studentClasses
  return {
    classes: sClass,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'studentClasses'
  }])
)(StudentClassDetails)