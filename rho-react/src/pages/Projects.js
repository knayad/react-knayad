import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function RecentProjects() {
  const [projects, setProjects] = useState([{}]);

  useEffect(() => {
    fetch("https://api.github.com/users/knayad/repos")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);

  return (
    <Container className="projects">
      <Row>
        <h2>This page uses GitHub's API to pull my repositories. </h2>{" "}
        <p>
          Links will be take you directly to the respective project repository.
        </p>
      </Row>
      <br />
      <br />
      <Row>
        <Col>
          <h3>
            <b>Project Name</b>
          </h3>
        </Col>
        <Col>
          <h3>
            <b>Main Language</b>
          </h3>
        </Col>
        <Col>
          <h3>
            <b>Description</b>
          </h3>
        </Col>
        <Col>
          <h3>
            <b>HTML URL</b>
          </h3>
        </Col>
      </Row>
      <br />

      {projects.map((i) => {
        console.log(i);
        return (
          <Row className="project-row" key={i.name}>
            <Col>{i.name}</Col>
            <Col>{i.language}</Col>
            <Col>{i.description}</Col>
            <Col>
              <a href={i.html_url} onClick={window.open()}>
                {i.name}
              </a>
            </Col>
            <br />
            <br />
          </Row>
        );
      })}
      <br />
    </Container>
  );
}
