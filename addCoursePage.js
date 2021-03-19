import React, { useRef} from "react"
import { Form,Card} from "react-bootstrap"

export default function AddCourse() {
  const course = useRef()
  const code = useRef()
  return (
      <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Add course</h2>
          <Form >

            <Form.Group id="Addcourse">
              <Form.Label>Course Title</Form.Label>
              <Form.Control type="text" ref={course} required />
            </Form.Group>

            <Form.Group id="code">
              <Form.Label>code</Form.Label>
              <Form.Control type="password" ref={code} required />
            </Form.Group>

            <div class="form-group">
                <label class="col-md-4 control-label" for="submit"></label>
                  <div class="col-md-8">
                    <button id="submit" name="submit" class="btn btn-primary" value="1">Add</button>
                    <a href="./Login" id="cancel" name="cancel" class="btn btn-default">Cancel</a>
                  </div>
            </div>
        
          </Form>

        </Card.Body>

      </Card>

    </>
  );
}