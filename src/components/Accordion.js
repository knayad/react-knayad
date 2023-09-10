import Accordion from "react-bootstrap/Accordion";
import { Nav } from "react-bootstrap";
import { ProgrammingInfo, Content, About } from "../text/accordionInfo";

//edit href info

function CollapsedAccordion() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <Nav.Link href="about">About Me</Nav.Link>
        </Accordion.Header>
        <Accordion.Body> {About}</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <Nav.Link href="programming">Programming</Nav.Link>
        </Accordion.Header>
        <Accordion.Body>{ProgrammingInfo}</Accordion.Body>
      </Accordion.Item>
      {/* <Accordion.Item eventKey="2">
        <Accordion.Header>
          <Nav.Link href="#podcast">Content</Nav.Link>
        </Accordion.Header>
        <Accordion.Body>{PodcastInfo}</Accordion.Body>
      </Accordion.Item> */}
      <Accordion.Item eventKey="3">
        <Accordion.Header>
          <Nav.Link href="#content">Content</Nav.Link>
        </Accordion.Header>
        <Accordion.Body>{Content}</Accordion.Body>
      </Accordion.Item>
      {/* <Accordion.Item eventKey="1">
        <Accordion.Header>
          <Nav.Link href="#?">?</Nav.Link>
        </Accordion.Header>
        <Accordion.Body>{ArtInfo}</Accordion.Body>
      </Accordion.Item> */}
    </Accordion>
  );
}

export default CollapsedAccordion;
