import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RecentProjects from "../components/MapRecentProjects";

import SkillsComponent from "../components/SkillsComponent";

const Programming = () => {
  return (
    <>
      <br />
      <Container fluid id="programming">
        <Row id="headers">
          <Col>
            <h1> Languages and Tools</h1>
          </Col>
          <Col>
            <h1>Recent Projects</h1>
          </Col>
        </Row>
        <Col />
        <Row id="populate">
          <Col>
            <SkillsComponent />
          </Col>
          <Col>
            <br />
            <RecentProjects />
          </Col>
        </Row>
      </Container>
      <br />
    </>
  );
};

export default Programming;
