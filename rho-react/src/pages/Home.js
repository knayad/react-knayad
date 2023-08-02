import React from "react";
import Container from "react-bootstrap/Container";

import MySpline from "../components/MySpline";

const HomePage = () => {
  return (
    <>
      <br />
      <Container fluid id="programming">
        <h1 className="welcome"> Welcome to my website</h1>
        <br />
        <MySpline />
        <br />
        <h4 className="welcome"> Can't find what you're looking for? </h4>
      </Container>
      <br />
    </>
  );
};

export default HomePage;
