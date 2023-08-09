import Container from "react-bootstrap/Container";
import Star from "../assets/images/svg/bright-yellowstar-svgrepo-com.svg";
import { Col, Row } from "react-bootstrap";

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
          As I said, I dislike talking about myself. Mostly because I just can't
          be bothered to make sense of my own life. Instead, here's a list of
          some of my interests.
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
            The days I want to be one with nature and a hike seems like too much
            of an up-front commitment.{" "}
          </li>
          <li>
            <b>Hiking: </b>
            The days I feel like over committing.
          </li>
          <li>
            <b>Coding: </b>
            If being human is too hard and I feel like hating myself a little
            bit.
          </li>
        </ul>
      </Container>
      <br />
      <Container>
        <h1>Reviews</h1>
        <img src={Star} alt="star" style={{ height: 55, width: 55 }} />
        <img src={Star} alt="star" style={{ height: 55, width: 55 }} />
        <img src={Star} alt="star" style={{ height: 55, width: 55 }} />
        <img src={Star} alt="star" style={{ height: 55, width: 55 }} />
        <img src={Star} alt="star" style={{ height: 55, width: 55 }} />
        <p>*Max is 5 stars.</p>
        <Container className="reviews">
          <Col>
            <Row>
              <img src={Star} alt="star" style={{ height: 55, width: 55 }} />
              <img src={Star} alt="star" style={{ height: 55, width: 55 }} />
              <img src={Star} alt="star" style={{ height: 55, width: 55 }} />
              <img src={Star} alt="star" style={{ height: 55, width: 55 }} />
              <img src={Star} alt="star" style={{ height: 55, width: 55 }} />
              <h2>Would befriend again.</h2>
            </Row>
            <Row>
              <p>
                "[Nadia] is earnest, curious, and works hard. She's smart as
                hell, but more importantly, she knows bullshit when she sees it.
                She's sweet and excitable and fiercely loyal and loves animals.
                She makes banger coffee. The one thing I'd say is a matter of
                taste that you might not like about her is that she's loud and
                it's very clear she's from the northeast. Personally, that's
                something that drew me to her."{" "}
              </p>
            </Row>
          </Col>
          <Col>
            <Row>
              <img src={Star} alt="star" style={{ height: 55, width: 55 }} />
              <img src={Star} alt="star" style={{ height: 55, width: 55 }} />
              <img src={Star} alt="star" style={{ height: 55, width: 55 }} />
              <img src={Star} alt="star" style={{ height: 55, width: 55 }} />
              <h2>Hard to get ahold of.</h2>
            </Row>
            <Row>
              <p>Otherwise she might have gotten 7/5 stars. </p>
            </Row>
          </Col>
        </Container>
      </Container>
      <br />
    </Container>
  );
};

export default About;
