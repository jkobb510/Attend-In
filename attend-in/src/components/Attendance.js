import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button }from "react-bootstrap";
import NavBar from "./NavBar";
import { CardDeck } from "reactstrap";
import { CardView } from 'react-card-with-image'
import 'react-card-with-image/dist/index.css'
import profile from "./profile_default.png"

const items = [
    {
        image: profile
    }
]

export default function Attendance(){
    return(
        <>
        <NavBar>
        </NavBar>
        <Card.Body>
            <h2 className="text-center mb-4">Course 1 Attendance</h2>
        </Card.Body>
        <CardDeck className = "bg-dark" style ={{ width: '60rem', display: "flex", flexdirection: "row" }}>
            <Card className="bg-success" style={{ width: '20rem', flex:1, display:'inline-block' }}>
                <Card.Body>
                <CardView 
                    items = { items }
                    imageHeight='80px'
                    imageWidth='80px'
                />
                    <Card.Text>
                        Student 1
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="bg-danger" style={{ width: '20rem', flex:1, display:'inline-block' }}>
                <Card.Body>
                <CardView 
                    items = { items }
                    imageHeight='80px'
                    imageWidth='80px'
                />
                    <Card.Text>
                        Student 2
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="bg-success" style={{ width: '20rem', flex:1, display:'inline-block' }}>
                <Card.Body  className="bg-Success">
                <CardView 
                    items = { items }
                    imageHeight='80px'
                    imageWidth='80px'
                />
                    <Card.Text>
                        Student 3
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="bg-success" style={{ width: '20rem', flex:1, display:'inline-block' }}>
                <Card.Body  className="bg-Success">
                <CardView 
                    items = { items }
                    imageHeight='80px'
                    imageWidth='80px'
                />
                    <Card.Text>
                        Student 4
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="bg-success" style={{ width: '20rem', flex:1, display:'inline-block' }}>
                <Card.Body  className="bg-Success">
                <CardView 
                    items = { items }
                    imageHeight='80px'
                    imageWidth='80px'
                />
                    <Card.Text>
                        Student 5
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="bg-success" style={{ width: '20rem', flex:1, display:'inline-block' }}>
                <Card.Body  className="bg-Success">
                <CardView 
                    items = { items }
                    imageHeight='80px'
                    imageWidth='80px'
                />
                    <Card.Text>
                        Student 6
                    </Card.Text>
                </Card.Body>
            </Card>
        </CardDeck>
        <Button variant="primary">
              End Attendance
          </Button>
        </>
    )
}