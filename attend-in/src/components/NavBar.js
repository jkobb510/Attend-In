import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import NavDropdown from "react-bootstrap/NavDropdown";
export default function NavBar() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Attend-In</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/attendance">Attendance</Nav.Link>
            <NavDropdown title="Courses">
              <NavDropdown.Item href="/class-list">Course 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/2">Course 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3">Course 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="course-info">Courses Page</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="search" className="mr-sm-2" />
            <Button variant="outline-primary">search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}