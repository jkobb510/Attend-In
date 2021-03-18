import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card }from "react-bootstrap";
import NavBar from "./NavBar";

export default function CourseInfo(){
  return(
    <>
    <NavBar>
    </NavBar>
    <Card.Body>
      <h2 className="text-center mb-4">Course Page</h2>
      </Card.Body>
      <Card>
        <Card.Header>CSC 4680</Card.Header>
        <Card.Body>
          <Card.Title>Course 1</Card.Title>
          <Card.Text>
            This is a placeholder course.
            Time: Tu/Th 10:30-11:50
            Location: 420 Park Place, Room 350
          </Card.Text>
          <Button variant="primary">
              Attendance
            </Button>
            <Button variant="primary" href = "/class-list">
              Class list
            </Button>
            <Button variant="primary">
              Invite
            </Button>
        </Card.Body>
      </Card>
      <Card.Body>

      </Card.Body>

      <Card>
        <Card.Header>CSC 4250</Card.Header>
        <Card.Body>
          <Card.Title>Course 2</Card.Title>
          <Card.Text>
            This is a placeholder course.
            Time: M/W 14:00-15:20
            Location: 420 Park Place, Room 123
          </Card.Text>
          <Button variant="primary">
              Attendance
            </Button>
            <Button variant="primary">
              Class list
            </Button>
            <Button variant="primary">
              Invite
            </Button>
        </Card.Body>
      </Card>
    </>
    )
}