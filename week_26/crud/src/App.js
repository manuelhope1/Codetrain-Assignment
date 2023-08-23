import "./App.css";
import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AddUserForm from "./components/AddUserForm";
import Users from "./components/Users";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [
        {
          name: "Kofi",
          phone: "+23357849334",
          location: "Accra",
          id: "76384729",
        },
        {
          name: "Jame",
          phone: "+2338039932",
          location: "Takoradi",
          id: "u2yy822482487",
        },
      ],
    };
  }
  inputSubmit = (newUser) => {
    newUser.id = Math.random().toString();
    this.setState({
      info: [...this.state.info, newUser],
    });
  };

  deleteInfo = (usersid) => {
    let undeletedInfo = this.state.info.filter((info) => info.id !== usersid);
    this.setState({
      info: undeletedInfo,
    });
  };

  editUser = (id, updatedUser) => {
    this.setState({
      info: this.state.info.map((user) =>
        user.id === id ? updatedUser : user
      ),
    });
  };

  render() {
    return (
      <>
        <h1 className="text-center hh">PhoneBook📞</h1>
        <Container>
          <Row>
            <Col md="4">
              <AddUserForm inputSubmit={this.inputSubmit} />
            </Col>
            <Col md="8">
              <Users
                userInfo={this.state.info}
                deleteInfo={this.deleteInfo}
                editInfo={this.editUser}
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
