import { Container, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import monster from "../assets/monster.png";

const NotFound = () => {
  return (
    <Container className="not-found">
      <Col>
        <br />
        <h1>Whomp, whomp.</h1>
        <h2> This page cannot be found.</h2>
        <br />
        <Link to="/home"> Back to Home</Link>
        <br />
        <br />
        <br />
      </Col>
      <Col>
        <img id="monster" src={monster} alt="not-found monster" /> <br />
        <br />
      </Col>
    </Container>
  );
};

export default NotFound;
