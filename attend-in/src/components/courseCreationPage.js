import React, { useRef} from "react"
import { Form,Card} from "react-bootstrap"

export default function AddCourse() {
  const course = useRef()
  const code = useRef()
  const time = useRef()
  return (
      <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Create a course</h2>
          <Form >

            <Form.Group id="courseName">
              <Form.Label>Course Name</Form.Label>
              <Form.Control type="text" ref={course} required />
            </Form.Group>

            <Form.Group id="time_date">
              <Form.Label>Time</Form.Label>
              <Form.Control type="datetime-local"  ref={time} required />
            </Form.Group>

            <Form.Group id="code">
              <Form.Label>code</Form.Label>
              <Form.Control type="text" ref={code} required />
            </Form.Group>

            <div class="form-group">
                  <div class="col-md-8">
                    <button id="submit" name="submit" class="btn btn-primary" value="1">Create</button>
                    <a href="./Login" id="cancel" name="cancel" class="btn btn-default">Cancel</a>
                  </div>
            </div>

          </Form>

        </Card.Body>

      </Card>

    </>
  );
}