import { Col, Container, Row } from "react-bootstrap";
import useFetch from "../hooks/useFetch";

export default function Repositories() {
  const { data: projects } = useFetch(
    "https://api.github.com/users/knayad/repos?sort=created&direction=desc&page=1&per_page=6"
  );

  return (
    <Container className="projects">
      <Row>
        <h2>
          This page uses GitHub's API to pull recently created repositories.{" "}
        </h2>{" "}
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
            <b>Link</b>
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
