import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
  // STUDENT
  if ( !! props && !! props.profile  && !! props.profile.role ) {
    if ( props.profile.role.toLowerCase() === 'student' )
    return (
      <div>
        <ul className="right">
          <li  ><NavLink to='/add'>Add Class</NavLink></li>
          <li><a onClick={props.signOut}>Log Out</a></li>
          <li><NavLink to='/' className="btn btn-floating pink lighten-1">
            {props.profile.initials}
          </NavLink></li>
        </ul>
      </div>
    )
    else if ( props.profile.role.toLowerCase() === 'teacher' )
    return (
      <div>
        <ul className="right">
          <li  ><NavLink to='/add'>Add Class</NavLink></li>
          <li><a onClick={props.signOut}>Log Out</a></li>
          <li><NavLink to='/' className="btn btn-floating blue lighten-1">
            {props.profile.initials}
          </NavLink></li>
        </ul>
      </div>
    )
  }
  else
    return (
      <div></div>
    )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
