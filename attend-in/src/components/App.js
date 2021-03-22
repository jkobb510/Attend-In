import React from "react"
import Signup from "./Signup"
import './App.css';
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import ClassList from "./ClassList"
import CourseInfo from "./CourseInfo"
import Attendance from "./Attendance"

function App() {
  return (
    <Container
    className="d-flex align-items-center justify-content-center"
    style={{ minHeight: "100vh" }}
  >
    <div className="w-100" style={{ maxWidth: "400px" }}>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/class-list" component={ClassList}/>
            <Route path="/course-info" component={CourseInfo}/>
            <Route path="/attendance" component={Attendance}/>
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  </Container>
  );
}

export default App;
