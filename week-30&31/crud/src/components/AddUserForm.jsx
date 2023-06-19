import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addNewUser } from "../slice/usersSlice";
import { v4 } from "uuid";

const AddUserForm = ({ inputSubmit }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const id = v4();

  const submitChange = (e) => {
    e.preventDefault();
    const newUser = {
      name,
      phone,
      location,
      id,
    };
    dispatch(addNewUser(newUser));
    setName("");
    setLocation("");
    setPhone("");
  };

  return (
    <Form onSubmit={submitChange}>
      <h3>Enter contact details</h3>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          name="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="Phone number"
          name="phone"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          value={phone}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Location</Form.Label>
        <Form.Control
          type="text"
          placeholder="Location"
          name="location"
          onChange={(e) => {
            setLocation(e.target.value);
          }}
          value={location}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddUserForm;
