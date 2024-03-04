import React, { Component } from "react";
import { Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";

import heart from "../assets/pngs/heart.png";

class Footer extends Component {
  render() {
    return (
      <Container>
        <br />
        <Row>
          <small>
            Explore my website!
            <br /> Made with <img id="heart" src={heart} alt="love" /> for you.
          </small>{" "}
        </Row>
      </Container>
    );
  }
}

export default Footer;
