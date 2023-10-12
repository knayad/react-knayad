import React from "react";
import Container from "react-bootstrap/Container";

import TypeWriter from "../components/TypeWriter";

const Contact = () => {
  return (
    <Container>
      <h1 className="welcome" id="typeEffect">
        <TypeWriter text="Contact Me" delay={150} />
      </h1>
    </Container>
  );
};

export default Contact;
