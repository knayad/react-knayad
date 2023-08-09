import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CollapsedAccordion from "./Accordion";

import "../css/styles.css";

function ModalComponent() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <h4 className="welcome"> Can't find what you're looking for? </h4>
      <br />
      <Button variant="primary" onClick={handleShow}>
        Give me more options...
      </Button>

      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title>What brings you here today?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CollapsedAccordion />
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          <Button variant="primary" onClick={handleClose}>
            Just exploring!
          </Button>
        </Modal.Footer>
      </Modal>
      <br />
      <br />
    </>
  );
}

export default ModalComponent;
