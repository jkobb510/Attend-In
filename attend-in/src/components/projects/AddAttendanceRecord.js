import React, { Component } from 'react'
import { connect } from 'react-redux'
import { checkIn } from '../../store/actions/studentActions'
import { Redirect } from 'react-router-dom'
import firebase from 'firebase/app';
import { ToastProvider, useToasts } from 'react-toast-notifications';


class AddAttendanceRecord extends Component {

  state = {
    courseId: this.props.location.pathname.split('/')[2], // doing this made me want to throw up
    studentId: this.props.auth.uid
  }
  handleChange = (e) => {
    this.setState({
      courseId: e.target.value
    })
  }
  handleSubmit = (e) => {
   console.log('WE MADE ITTTTT')

    this.props.checkIn(this.state);
    e.preventDefault();
    console.log('DONE')
    this.props.history.push('/attendanceSuccess');
  }
  render() {

    const { auth } = this.props;
    console.log('thisasdasd', this)

    if (!auth.uid) return <Redirect to='/signin' />
    return (
      <div className="container">
        SHIT GOES HERE
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Attendance</h5>
          <div className="input-field">
            <button className="btn pink lighten-1">CHECK IN</button>
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
    checkIn: (course) => dispatch(checkIn(course)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddAttendanceRecord)