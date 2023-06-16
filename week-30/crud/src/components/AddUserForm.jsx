import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addNewUser } from "../slice/usersSlice";

const AddUserForm = ({ inputSubmit }) => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: "",
    phone: "",
    location: "",
  });

  const inputChange = (e) => {
    e.preventDefault();
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const submitChange = (e) => {
    e.preventDefault();
    dispatch(addNewUser(state));
    setState({
      name: "",
      phone: "",
      location: "",
    });
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
          onChange={inputChange}
          value={state.name}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="Phone number"
          name="phone"
          onChange={inputChange}
          value={state.phone}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Location</Form.Label>
        <Form.Control
          type="text"
          placeholder="Location"
          name="location"
          onChange={inputChange}
          value={state.location}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddUserForm;
