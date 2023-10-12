import React from "react";
import Container from "react-bootstrap/Container";

import MySpline from "../components/MySpline";
import { Col, Row } from "react-bootstrap";
import TypeWriter from "../components/TypeWriter";

const Spline = () => {
  return (
    <Container>
      <h1 className="welcome" id="typeEffect">
        <TypeWriter text={"3D Spline Avatar"} delay={150} />
      </h1>
      <Col md={8} className="landing-page-col">
        {/* <Row>
          <h1 className="welcome"> Welcome to my website</h1>
        </Row> */}
        <Row>{""}</Row>
        <Row className="spline-avatar">
          <MySpline />
        </Row>
        <Row>
          <h3> Check out the avatar I made using Spline! </h3>
          <h4> The avatar will follow your mouse movements.</h4>
          <p> You may also pan by left-clicking, holding, and dragging.</p>
          <small>
            {" "}
            It is not unusual for it to take a long time to load...{" "}
          </small>
        </Row>
      </Col>{" "}
      <br />
    </Container>
  );
};

export default Spline;
