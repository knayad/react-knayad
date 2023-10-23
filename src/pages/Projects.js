import React from "react";
import Container from "react-bootstrap/Container";

import TypeWriter from "../components/TypeWriter";

const Projects = () => {
  return (
    <Container>
      <h1 className="welcome" id="typeEffect">
        <TypeWriter text="Projects" delay={150} />
      </h1>
    </Container>
  );
};

export default Projects;
