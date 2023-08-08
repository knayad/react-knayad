import React from "react";
import Container from "react-bootstrap/Container";

import MySpline from "../components/MySpline";

const Home = () => {
  return (
    <Container>
      <br />
      <h1 className="welcome"> Welcome to my website</h1>
      <br />
      <MySpline />
      <br />
    </Container>
  );
};

export default Home;
