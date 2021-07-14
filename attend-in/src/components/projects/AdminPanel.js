import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setClassAttendance } from '../../store/actions/courseActions'
import { Redirect } from 'react-router-dom'
import firebase, { firestore } from 'firebase/app';
import { ToastProvider, useToasts } from 'react-toast-notifications';


class AdminPanel extends Component {
  
  state = {
    Abbreviation: '',
    courseName: '',
    courseTimes: '',
    code: '',
    location: null
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
 
  }


  startAttendance = () => {

  }



  render() {
    const { auth } = this.props;

    
    if (!auth.uid) return <Redirect to='/signin' />
    return (
      <div className="container">

      {/* {
        location.loaded ? JSON.stringify(location) 
        : "Location data not available"

      } */}

        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Add Course</h5>
          <div className="input-field">
            <input type="text" id='Abbreviation' onChange={this.handleChange} />
            <label htmlFor="Abbreviation">Abbreviation</label>
          </div>


          <div className="input-field">
            <label htmlFor="courseName">Course Name</label>
            <input type="text" id='courseName' onChange={this.handleChange} />
          </div>


          <div className="input-field-time">
          <label htmlFor="courseTimes">Course Times</label>

            <div className="time-fields" >
     
              <span> Monday </span> <input onChange={this.handleChange} type="time" id="courseTimes" name="appt" min="09:00" max="18:00" />
              <span> Tuesday </span> <input onChange={this.handleChange} type="time" id="courseTimes" name="appt" min="09:00" max="18:00" />
              <span> W </span> <input onChange={this.handleChange} type="time" id="courseTimes" name="appt" min="09:00" max="18:00" />
              <span> TH </span> <input onChange={this.handleChange} type="time" id="courseTimes" name="appt" min="09:00" max="18:00" />
              <span> FRI </span> <input onChange={this.handleChange} type="time" id="courseTimes" name="appt" min="09:00" max="18:00" />

            </div>

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
    setClassAttendance: (value) => dispatch(setClassAttendance(value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPanel)