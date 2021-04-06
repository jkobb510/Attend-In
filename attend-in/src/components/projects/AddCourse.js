import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addStudentCourse } from '../../store/actions/courseActions'
import { addTeacherCourse } from '../../store/actions/courseActions'
import { Redirect } from 'react-router-dom'
import firebase from 'firebase/app';

class AddCourse extends Component {
  state = {
    courseId: '',
    studentId: this.props.auth.uid
  }
  handleChange = (e) => {
    this.setState({
      courseId: e.target.value
    })
  }
  handleSubmit = (e) => {
    console.log(this.state.courseId)
    console.log(this.props.profile.role.toLowerCase() )
    firebase.firestore().collection("courses").where("code", "==", this.state.courseId)
      .get()
      .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.state.courseId = doc.id
           if( this.props.profile.role.toLowerCase() == 'student' )
            this.props.addStudentCourse(this.state);
          if( this.props.profile.role.toLowerCase() == 'teacher' )
            this.props.addTeacherCourse(this.state);
          })
      })
    e.preventDefault();
   this.props.history.push('/add');
  }
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Add Course</h5>
          <div className="input-field">
            <input type="text" id='title' onChange={this.handleChange} />
            <label htmlFor="courseId">Course Code</label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Add</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addStudentCourse: (course) => dispatch(addStudentCourse(course)),
    addTeacherCourse: (course) => dispatch(addTeacherCourse(course))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCourse)