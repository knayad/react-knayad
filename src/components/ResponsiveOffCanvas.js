import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav";

function ResponsiveOffCanvas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Nav.Link href="#link" onClick={handleShow}>
        Off Canvas
      </Nav.Link>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p className="mb-0">This is content.</p>
          <br />
          <br />
          <p className="mb-0">This is for Renato:</p>
          <br />
          <small>peek a boo</small>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default ResponsiveOffCanvas;
