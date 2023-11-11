import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";

// import skull from "../assets/skull.png";
import sup from "../assets/bastrad-sup.png";

import MySpline from "../components/MySpline";
import TypeWriter from "../components/TypeWriter";

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
      <br />
      <Row>
        <Col>stuff 1</Col>
        <Col>stuff 2</Col>
        <Col>stuff 3</Col>
      </Row>
      <Row>
        <Col>
          <MySpline />
          <TypeWriter text="I wonder what the buttons do..." delay={150} />
          <br />
          <br />
        </Col>
      </Row>
      <Row>
        <Col>stuff 7</Col>
        <Col>stuff 8</Col>
        <Col>stuff 9</Col>
      </Row>
    </Container>
  );
};

export default Home;
