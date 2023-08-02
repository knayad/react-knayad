import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SkillsComponent = () => {
  const skills = [
    "javscript",
    "html",
    "github",
    "css",
    "bootstrap",
    "node",
    "python",
    "mongodb",
  ];

  return (
    <Container>
      {skills.map((skill) => (
        <Row>
          <Col>{skill}</Col>
        </Row>
      ))}
    </Container>
  );
};

export default SkillsComponent;
