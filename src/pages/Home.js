import React from "react";
import Container from "react-bootstrap/Container";

import MySpline from "../components/MySpline";

const Home = () => {
  return (
    <Container>
      <br />
      <h1 className="welcome"> Welcome to my website</h1>
      <br />
      <h3> Check out the 3D avatar I made using Spline</h3>
      <h4> The avatar will follow your mouse movements.</h4>
      <p> You may also pan by left-clicking, holding, and dragging.</p>
      <MySpline />
      <br />
    </Container>
  );
};

export default Home;
