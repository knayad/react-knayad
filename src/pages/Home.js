import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";

import TypeWriter from "../components/TypeWriter";

const Home = () => {
  return (
    <Container>
      <br />
      <Col md={8} className="landing-page-col">
        <Row>
          <h1 className="welcome" id="typeEffect">
            <TypeWriter text="Hello, World!" delay={150} />
          </h1>
          <h3 id="my-name">My name is Nadia.</h3>
          <p>
            I am a full stack web developer with an interest in machine
            learning.
          </p>
          <span>
            <Button variant="primary" size="sm" href="about">
              About Me
            </Button>{" "}
            <Button variant="primary" size="sm" href="hire">
              Hire Me
            </Button>
          </span>
        </Row>
      </Col>
      <br />
      <br />
      <Col>Stuff</Col>
      <br />
    </Container>
  );
};

export default Home;
