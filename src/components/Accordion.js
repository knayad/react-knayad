import Accordion from "react-bootstrap/Accordion";
import { Nav } from "react-bootstrap";
import {
  ProgrammingInfo,
  ArtInfo,
  PodcastInfo,
  Blog,
} from "../text/accordionInfo";

//edit href info

function CollapsedAccordion() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <Nav.Link href="#programming">Programming</Nav.Link>
        </Accordion.Header>
        <Accordion.Body>{ProgrammingInfo}</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <Nav.Link href="#home">Art</Nav.Link>
        </Accordion.Header>
        <Accordion.Body>{ArtInfo}</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          <Nav.Link href="#home">Podcast</Nav.Link>
        </Accordion.Header>
        <Accordion.Body>{PodcastInfo}</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>
          <Nav.Link href="#home">Blogs</Nav.Link>
        </Accordion.Header>
        <Accordion.Body>{Blog}</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>
          <Nav.Link href="about">About Me</Nav.Link>
        </Accordion.Header>
        <Accordion.Body>
          <p>
            {" "}
            Barffff... I hate talking about myself.
            <br />
            <br />
            Basically, you need to know two things:
            <ol>
              <li> I'm like a cat on it's fifth life.</li>
              <li>
                I'm a nerd so I worked in different industries to keep learning.
              </li>
            </ol>
            That's why I became interested in software development. You just
            keep learning.
          </p>
          <p>
            <b>
              *tsundre voice* <br />
            </b>
            If you must know more, <a href="about"> click here.</a>
          </p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default CollapsedAccordion;
