import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editNewUser } from "../slice/usersSlice";

const EditUserForm = (props) => {
  const [name, setName] = useState(props.userInfo.name);
  const [phone, setPhone] = useState(props.userInfo.phone);
  const [location, setLocation] = useState(props.userInfo.location);
  const [id] = useState(props.userInfo.id);
  const user = props.userInfo;
  const dispatch = useDispatch();

  const inputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "location":
        setLocation(value);
        break;
      default:
        break;
    }
  };

  const submitChange = (e) => {
    e.preventDefault();
    const newData = {
      id: user.id,
      name,
      phone,
      location,
    };
    dispatch(editNewUser({ id: user.id, newData }));
    props.closeModal();
  };

  return (
    <Form onSubmit={submitChange}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          name="name"
          onChange={inputChange}
          value={name}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="Phone number"
          name="phone"
          onChange={inputChange}
          value={phone}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Location</Form.Label>
        <Form.Control
          type="text"
          placeholder="Location"
          name="location"
          onChange={inputChange}
          value={location}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default EditUserForm;
