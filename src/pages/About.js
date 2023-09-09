import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";

import { useEffect, useState } from "react";

const About = () => {
  const [joke, setJoke] = useState(false);

  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 6500));
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
      {/* <br />
      <h1 className="welcome"> My name is Nadia</h1>
      <br /> */}
      <h1> About Me</h1>
      <Container className="about">
        <p> Here's a list of some of my interests!</p>

        <ul>
          <li>
            <b>Coffee:</b>{" "}
            <p>
              I better know how to make a decent cup of coffee. I worked in
              -industry for almost a decade.{" "}
            </p>
          </li>
          <li>
            <b>Reading:</b>{" "}
            <p>
              {" "}
              I'm especially drawn books by (credible) doctors who explore the
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
      </Container>
    </Container>
  );
};

export default About;
