import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import {
  FaCss3Alt,
  FaHtml5,
  FaBootstrap,
  FaGithub,
  FaPython,
  FaJs,
} from "react-icons/fa";
// import { TbBrandJavascript } from "react-icons/tb";
import { RiReactjsFill } from "react-icons/ri";

// import skull from "../assets/pngs/skull.png";
import sup from "../assets/pngs/bastrad-sup.png";

import MySpline from "../components/MySpline";
import TypeWriter from "../components/TypeWriter";

const Home = () => {
  return (
    <Container>
      <Row>
        {/* <TypeWriter text="Welcome" delay={150} /> */}
        <Col className="landing-page-col">
          <Container fluid className="nameTagSize">
            <h1 id="my-name-tag-hello">
              <b>HELLO</b>
              <br />
              <p id="my-name-tag">MY NAME IS</p>
              <span>
                <h3 id="my-name">Nadia Ayad</h3>
              </span>
            </h1>
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
      <h1 className="homeH1">
        <TypeWriter text="SKILLS & TOOLS" delay={150} />
      </h1>
      <br />
      <br />
      <br />
      <Row className="skillIconG2P">
        <Col>
          <FaJs title="JavaScript" />
        </Col>
        <Col>
          <FaCss3Alt title="CSS" />
        </Col>
        {/* <Col>
          <TbBrandJavascript title="JavaScript" />
        </Col> */}
        <Col>
          <FaHtml5 title="HTML" />
        </Col>
        <Col>
          <FaPython title="Python" />
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Row className="skillIconP2G">
        <Col>
          <RiReactjsFill title="React" />
        </Col>
        <Col>
          <FaBootstrap title="Bootstrap" />
        </Col>
        <Col>
          <FaGithub title="GitHub" />
        </Col>
      </Row>
      <br />
      <br />
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
