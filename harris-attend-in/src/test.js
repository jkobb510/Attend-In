import React from "react"
import { Card } from "react-bootstrap"

export default function test() {
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">This is a test page</h2>
          <strong>Message:</strong> something something
        </Card.Body>
      </Card>
    </>
  )
}