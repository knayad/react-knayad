import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";

import Typewriter from "../components/TypeWritter";

const Home = () => {
  return (
    <Container>
      <br />
      <Col md={8} className="landing-page-col">
        <Row>
          <h1 className="welcome" id="typeEffect">
            <Typewriter text="Hello, World!" delay={200} />
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
            <Button variant="primary" size="sm" href="contact">
              Hire Me
            </Button>
          </span>
        </Row>
      </Col>{" "}
      <br />
    </Container>
  );
};

export default Home;
