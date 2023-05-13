import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export default class AddUserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      location: "",
    };
  }

  inputChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  submitChange = (e) => {
    e.preventDefault();
    this.props.inputSubmit(this.state);
    this.setState({
      name: "",
      phone: "",
      location: "",
    });
  };

  render() {
    return (
      <Form onSubmit={this.submitChange}>
        <h3>Enter contact details</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="name"
            onChange={this.inputChange}
            value={this.state.name}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Phone number"
            name="phone"
            onChange={this.inputChange}
            value={this.state.phone}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Location"
            name="location"
            onChange={this.inputChange}
            value={this.state.location}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}
