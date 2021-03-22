import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Card }from "react-bootstrap";
import NavBar from "./NavBar";

export default function Chart() {
  return(
  <>
    <NavBar>
    </NavBar>
    <Card>
      <Card.Body>
      <h2 className="text-center mb-4">Course 1</h2>
      <h2 className="text-center mb-4">Tu/Th, 10:30-11:50</h2>
      </Card.Body>
    </Card>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Last Name</th>
          <th>First Name</th>
          <th>ID</th>
      </tr>
      </thead>
      <tbody>
        <tr>
          <td>Camon</td>
          <td>James</td>
          <td>000000001</td>
        </tr>
        <tr>
          <td>Diaz</td>
          <td>Jose</td>
          <td>000000002</td>
        </tr>
        <tr>
          <td>Gebreegziabher</td>
          <td>Samson</td>
          <td>000000003</td>
        </tr>
        <tr>
          <td>Gu</td>
          <td>Harris</td>
          <td>000000004</td>
        </tr>
        <tr>
          <td>Lee</td>
          <td>Seung</td>
          <td>000000005</td>
        </tr>
        <tr>
          <td>Singleton-Peters</td>
          <td>Tariq</td>
          <td>000000006</td>
        </tr>
      </tbody>
    </Table>
  </>
  )
}