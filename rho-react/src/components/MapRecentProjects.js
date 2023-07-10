import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

import { projects } from "../text/recentProjects";

const RecentProjects = () => {
  return (
    <Container id="mappedRecentProjects">
      {projects.map((project) => (
        <Stack className="project-preview" key={project.id}>
          <h2>{project.title}</h2>
          <p> {project.description}</p>
        </Stack>
      ))}
    </Container>
  );
};

export default RecentProjects;
