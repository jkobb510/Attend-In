import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button }from "react-bootstrap";
import NavBar from "./NavBar";

export default function Attendance(){
    return(
        <>
        <NavBar>
        </NavBar>
        <Card.Body>
            <h2 className="text-center mb-4">Course 1 Attendance</h2>
        </Card.Body>
        <Card className="bg-dark" style={{ width: '50rem' }}>
            <Card className="bg-success" style={{ width: '10rem' }}>
                <Card.Body>
                    <Card.Img variant="top" src="holder.js/10px10?text=Profile pic" />
                    <Card.Text>
                        Student 1
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="bg-danger" style={{ width: '10rem' }}>
                <Card.Body>
                    <Card.Img variant="top" src="holder.js/50px50?text=Profile pic" />
                    <Card.Text>
                        Student 2
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="bg-success" style={{ width: '10rem' }}>
                <Card.Body  className="bg-Success">
                    <Card.Img variant="top" src="holder.js/50px50?text=Profile pic" />
                    <Card.Text>
                        Student 3
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="bg-success" style={{ width: '10rem' }}>
                <Card.Body  className="bg-Success">
                    <Card.Img variant="top" src="holder.js/50px50?text=Profile pic" />
                    <Card.Text>
                        Student 4
                    </Card.Text>
                </Card.Body>
            </Card>
        </Card>
        <Button variant="primary">
              End Attendance
          </Button>
        </>
    )
}