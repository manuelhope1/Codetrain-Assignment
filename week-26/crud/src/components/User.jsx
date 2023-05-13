import React, { useState } from "react";
import { Col, Card, Button, Modal } from "react-bootstrap";
import EditUserForm from "./EditUserForm";

export default function User(props) {
  const deleteDetail = (e) => {
    e.preventDefault();
    props.deleteInfo(props.userInfo.id);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditUserForm
            userInfo={props.userInfo}
            editInfo={props.editInfo}
            closeModal={handleClose}
          />
        </Modal.Body>
      </Modal>
      <Col md="4" style={{ marginBottom: "10px" }}>
        <Card className="cardd">
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">
              Contact Details
            </Card.Subtitle>
            <Card.Title>Name: {props.userInfo.name}</Card.Title>
            <Card.Text>
              <span>Phone: {props.userInfo.phone}</span> <br />
              <span>Location: {props.userInfo.location}</span>
            </Card.Text>
            <Card.Link href="#">
              <Button size="sm" onClick={handleShow}>
                Edit
              </Button>
            </Card.Link>
            <Card.Link href="#">
              <Button variant="danger" size="sm" onClick={deleteDetail}>
                Delete
              </Button>
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
