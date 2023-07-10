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
          <Nav.Link href="#home">Music</Nav.Link>
        </Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default CollapsedAccordion;
