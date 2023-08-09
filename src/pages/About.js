import Container from "react-bootstrap/Container";
import "../assets/images/svg/bright-yellowstar-svgrepo-com.svg";

const About = () => {
  return (
    <Container>
      <br />
      <h1 className="welcome"> My name is Nadia</h1>
      <br />
      <h1> About Me</h1>
      <Container className="about">
        <p>
          {" "}
          As I said, I dislike talking about myself. It's not in a humble way, I
          just can't be bothered to make sense of my own life. Instead, here's a
          list of some of my interests.
        </p>

        <ul>
          <li>
            <b>Coffee:</b> I love it so much I worked in industry for almost a
            decade.{" "}
          </li>
          <li>
            <b>Anime: </b>
            After a love lost from being a mega-nerd in middle school, I almost
            exclusively watch Crunchyroll now.{" "}
          </li>
          <li>
            <b>Rock climbing: </b>I am scared of heights, so before I injured my
            shoulder, I got pretty good because I just didn't want to fall.
          </li>
          <li>
            <b>Gardening: </b>
            for the days I want to be one with nature and a hike seems like too
            much of an up-front commitment.{" "}
          </li>
          <li>
            <b>Hiking: </b>
            for the days I feel like over committing.
          </li>
          <li>
            <b>Coding: </b>
            for the days being human is too hard and I feel like hating myself a
            little bit.
          </li>
        </ul>
      </Container>
      <br />
      <Container className="reviews">
        <h2>Reviews</h2>
        <p>from the people who would rate me.</p>
        <img
          src="../assets/images/svg/bright-yellowstar-svgrepo-com.svg"
          alt="star"
        />
      </Container>
      <br />
    </Container>
  );
};

export default About;
