import Container from "react-bootstrap/Container";
import { Button, Col } from "react-bootstrap";

import { useEffect, useState } from "react";
import Typewriter from "../components/TypeWriter";

import skull from "../assets/skull.png";

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
      <h1 className="welcome" id="typeEffect">
        <Typewriter text="About Me" delay={200} />
      </h1>
      <br />
      <br />
      <Col md={{ span: 7, offset: 5 }} className="landing-page-col">
        <br />
        <p>
          <h5> What I think: </h5> I'm great at situational humor, listening,
          and making coffee. I've working in hospitality, finance, education,
          and non-profits. I enjoy learning, traveling, and eating. Basically, I
          hope to one day become a hyperpolyglot so I can enjoy food and
          conversations around the world.
          <br />
          <br />
          <h5>What friends think:</h5>
          To see what people have to say about me,{" "}
          <a href="reviews">click here!</a>
          <br />
          <br />
          <h5> What strangers think: </h5>I usually get hit with a sense of
          disbelief when I tell people that I'm an introvert. I once mentioned
          it to a colleague and he exclaimed,
          <i>"But you have such a great personality!"</i>I had no idea those
          were mutually exclusive, but I suppose it helps extroverts to know I'm
          the "social-kind" of introvert.
        </p>
      </Col>
      <Container className="about">
        <p> Here's a list of some of my interests!</p>
        <ul>
          <li>
            <b>Coffee:</b>{" "}
            <p>
              I better know how to make a decent cup of coffee. I worked in the
              industry for almost a decade.{" "}
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
          <li>
            <b>Reading:</b>{" "}
            <p>
              {" "}
              I'm especially drawn books by credible doctors who explore the
              biology and psychology of people.{" "}
            </p>
          </li>
          <li>
            <b>Traveling:</b>{" "}
            <p>
              A decent hostel with wifi and I am good to go! A hotel works too,
              if you read that incorrectly.{" "}
            </p>
          </li>
          <li>
            <b>Anime: </b>
            <p>I'm no otaku, but I do know enough to know what that means.</p>
          </li>
          <li>
            <b>Concerts: </b>
            <p> Seedy bars with rising talent is my jam. </p>
          </li>
          <li>
            <b>Skincare: </b> <p> I try, most days. </p>
          </li>
          <li>
            <b>Rock climbing: </b>{" "}
            <p>
              I'm decent because I'm terrified of heights and don't want to
              fall.
            </p>
          </li>
          <li>
            <b>Gardening: </b>
            <p>It's really just an excuse to play in the dirt. </p>
          </li>
          <li>
            <b>Animals: </b>
            <p>My cat and bird can do tricks. What can your pet do? </p>
          </li>
          <li>
            <b>Hiking: </b>
            <p>Especially with friends!</p>
          </li>
        </ul>
        <img alt="Skull with roses" src={skull} />
      </Container>
    </Container>
  );
};

export default About;
