import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav";
import CollapsedAccordion from "./Accordion";

function ResponsiveOffCanvas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Nav.Link href="#link" onClick={handleShow}>
        Explore
      </Nav.Link>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Explore</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <CollapsedAccordion />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default ResponsiveOffCanvas;
