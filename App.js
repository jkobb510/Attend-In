import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"

import mainPage from "./mainPage";
import addCoursePage from "./addCoursePage";
import courseCreationPage from "./courseCreationPage";
import courseDetailPage from "./courseDetailPage";

function App() {
  console.log(process.env.YOUR_ENV_KEY)

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
              <Route path="/mainPage" component={mainPage}/>
              <Route path="/addCoursePage" component={addCoursePage}/>
              <Route path="/courseCreationPage" component ={courseCreationPage}/>
              <Route path ="/courseDetailPage"  component={courseDetailPage}/>

          </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App