import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";

// import skull from "../assets/skull.png";
import sup from "../assets/bastrad-sup.png";
import MySpline from "../components/MySpline";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col className="landing-page-col">
          <Container fluid className="nameTagSize">
            <h3 id="my-name-tag-hello">
              <b>HELLO</b>
              <br />
              <h2 id="my-name-tag">MY NAME IS</h2>
              <span>
                <h3 id="my-name">Nadia Ayad</h3>
              </span>
            </h3>
          </Container>
        </Col>{" "}
        <Col>
          {/* <img alt="Skull with roses" src={skull} /> */}
          <img id="sup" alt="sup?" src={sup} />
          <p id="my-spiel">
            I am a full stack web developer with an interest in data science.
          </p>
          <span>
            <Button variant="success" size="lg" href="hire">
              Hire Me
            </Button>{" "}
            <Button variant="success" size="lg" href="about">
              About Me
            </Button>
          </span>
        </Col>
      </Row>
      <br />
      <br />
      <br />
      {/* <Col md={{ span: 7, offset: 5 }} className="landing-page-col">
        <Row className="spline-avatar">
          <h3> Check out the avatar I made using Spline! </h3>
          <MySpline />
          <h4> The avatar will follow your mouse movements.</h4>
          <p> You may also pan by left-clicking, holding, and dragging.</p>
          <small>
            {" "}
            It is not unusual for it to take a long time to load...{" "}
          </small>
        </Row>
      </Col> */}
      <br />
      <MySpline />
    </Container>
  );
};

export default Home;
