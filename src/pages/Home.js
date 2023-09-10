import React from "react";
import Container from "react-bootstrap/Container";

import MySpline from "../components/MySpline";
import { Col, Row } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <Col md={8} className="landing-page-col">
        <Row>
          <h1 className="welcome"> Welcome to my website</h1>
        </Row>
        <Row>{""}</Row>
        <Row className="spline-avatar">
          <MySpline />
        </Row>
        <Row>
          <h3> Check out the 3D avatar I made using Spline</h3>
          <h4> The avatar will follow your mouse movements.</h4>
          <p> You may also pan by left-clicking, holding, and dragging.</p>
        </Row>
      </Col>{" "}
      <br />
    </Container>
  );
};

export default Home;
