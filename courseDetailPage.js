import React, { Component } from "react";
import { Button, Image} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class CustomStyle extends Component {
  render() {
    return (
      <div className="text-center">
        <div id="courseImage" >
          <Image width ="150" src="https://www.shawacademy.com/assets/course-cards/website/wide/computer-science-20.png" responsive />
        </div>

        <div id="ClassName"> CSC4568 </div>
        <div id="TeacherName"> professor Nelson </div>
        <div id="courseTime"> 9:30AM - 11:15AM </div>
        <div id="courseLocation">CLS 200</div>
        <div id="courseDays">

        <div className="center">
          <Button
            variant ="primary"
            style={{ color: "white", background: "gray" }}
            size="sm">
              <b>M</b>
          </Button>

          <Button
            variant ="primary"
            style={{ color: "black", background: "gray" }}
            size="sm">
              <b>T</b>
          </Button>

          <Button
            variant ="primary"
            style={{ color: "white", background: "gray" }}
            size="sm">
              <b>W</b>
          </Button>

          <Button
            variant ="primary"
            style={{ color: "black", background: "gray" }}
            size="sm">
              <b>R</b>
          </Button>

          <Button
            variant ="primary"
            style={{ color: "white", background: "gray" }}
            size="sm">
              <b>F</b>
          </Button>
        </div>





      <div>
        <Button
          variant="primary"
          style={{ color: "white", background: "blue" }}
          size="lg"
          >
            CHECK IN
        </Button>

      </div>
    </div>
    </div>
    );
  }
}

export default CustomStyle;
