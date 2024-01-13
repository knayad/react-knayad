import { Container } from "react-bootstrap";
import Typewriter from "../components/TypeWriter";

const HireMe = () => {
  return (
    <Container>
      <h1 id="typeEffect">
        <Typewriter text="Hire Me" delay={100} />
      </h1>
    </Container>
  );
};

export default HireMe;
