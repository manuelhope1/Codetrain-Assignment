import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export default class EditUserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.userInfo.name,
      phone: this.props.userInfo.phone,
      location: this.props.userInfo.location,
      id: this.props.userInfo.id,
    };
  }

  inputChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  submitChange = (e) => {
    e.preventDefault();
    this.props.editInfo(this.state.id, this.state);
    this.setState({
      name: "",
      email: "",
      gen: "",
    });
    this.props.closeModal();
  };
  render() {
    return (
      <Form onSubmit={this.submitChange}>
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
