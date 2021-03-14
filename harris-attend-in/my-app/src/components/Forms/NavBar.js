import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import NavDropdown from "react-bootstrap/NavDropdown";
export default function App() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">nav bar</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Link href="#home">home</Nav.Link>
            <Nav.Link href="#foo">foo</Nav.Link>
            <NavDropdown title="Dropdown">
              <NavDropdown.Item href="#action/1">action 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/2">action 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3">action 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/4">action 4</NavDropdown.Item>
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