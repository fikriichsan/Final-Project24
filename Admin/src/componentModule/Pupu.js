import React from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Example2() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="primary"
        className="btn btn__theme"
        style={{ marginTop: "20px", marginRight: "10px" }}
        onClick={handleShow}
      >
        Add
      </Button>
      <Button
        variant="primary"
        className="btn btn__theme"
        style={{ marginTop: "20px", marginRight: "10px" }}
        onClick={handleShow}
      >
        Edit
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Module</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            name="title"
            value=""
            className="form-control"
            placeholder=""
            required
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example2;
