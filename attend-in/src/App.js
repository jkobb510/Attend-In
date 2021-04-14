import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import StudentClassDetails from './components/projects/StudentClassDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject'
import AddCourse from './components/projects/AddCourse'
import AddAttendanceRecord from './components/projects/AddAttendanceRecord'


class App extends Component {
  render() {
    return (
      <div className="APP">
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/'component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetails} />
            <Route path='/classes/:id' component={StudentClassDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateProject} />
            <Route path='/add' component={AddCourse} />
            <Route path='/attendanceSuccess' component={Dashboard} />
            <Route path='/attendance/' component={AddAttendanceRecord} />
          </Switch>
        </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
