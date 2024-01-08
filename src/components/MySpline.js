import Spline from "@splinetool/react-spline";
import { Container } from "react-bootstrap";
import TypeWriter from "../components/TypeWriter";

export default function MySpline() {
  return (
    <Container>
      <Spline scene="https://prod.spline.design/YzEy5lMIH75ywh5S/scene.splinecode" />
      <TypeWriter text="I wonder what the buttons do..." delay={150} />
    </Container>
  );
}
