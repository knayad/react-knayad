import Container from "react-bootstrap/Container";
import { Button, Row, Col } from "react-bootstrap";

import { useEffect, useState } from "react";
import Typewriter from "../components/TypeWriter";

import skull from "../assets/skull.png";
import SlickSlider from "../components/SlickSlider";

import { AboutMeList } from "../text/aboutMeList";

const About = () => {
  const [joke, setJoke] = useState(false);

  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 5500));
    }

    if (joke) {
      simulateNetworkRequest().then(() => {
        setJoke(false);
      });
    }
  }, [joke]);

  const handleClick = () => setJoke(true);

  return (
    <Container>
      <br />
      <h1 id="typeEffect">
        <Typewriter text="About Me" delay={200} />
      </h1>
      <br />
      <br />
      <Row>
        <Col sm={{ span: 1, offset: 0 }}>
          1 - travel 30 <br />
          <SlickSlider>
            {<img alt="Skull with roses" src={skull} />}
          </SlickSlider>
        </Col>
        <Col md={{ span: 8, offset: 1 }}>
          2 <br /> about me stuff
          <p id="aboutMeBlurb">
            Funny random blurb about travel, jokes, food, obsessive learning,
            and enjoying the company of myself and others.
          </p>
          <span>
            <Button href="travel">TRAVEL</Button>{" "}
            <Button href="REVIEWS">REVIEWS</Button>
          </span>
          <br />
          <br />
          <Row>
            <Col className="about">
              <p> Here's a list of some of my interests!</p>
              <ul>
                <li>
                  <b>Coffee:</b>{" "}
                  <p>
                    I better know how to make a decent cup of coffee. I worked
                    in the industry for almost a decade.{" "}
                  </p>
                </li>
                <li>
                  <b>Coding: </b>
                  <p>Q: What do cats and programmers have in common?</p>
                  <p>
                    A:{" "}
                    <Button
                      variant="primary"
                      disabled={joke}
                      onClick={!joke ? handleClick : null}
                    >
                      {joke
                        ? "When either one is unusually happy and excited, it is because they found a bug."
                        : "Click to see the answer"}
                    </Button>
                  </p>
                </li>
              </ul>
              {/* post joke half */}
              {AboutMeList}
            </Col>
            <Col>
              <img alt="Skull with roses" src={skull} />
            </Col>
          </Row>
        </Col>
        <Col sm={{ span: 1, offset: 1 }}>
          3 - friend30 <br />
          <SlickSlider />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
