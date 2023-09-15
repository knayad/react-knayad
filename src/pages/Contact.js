import React from "react";
import Container from "react-bootstrap/Container";

import Typewriter from "../components/TypeWritter";

import PDFReader from "../components/PDFReader";

const Contact = () => {
  return (
    <Container>
      <h1>
        <Typewriter text="Contact Me" delay={200} />
      </h1>
      <PDFReader />
    </Container>
  );
};

export default Contact;
