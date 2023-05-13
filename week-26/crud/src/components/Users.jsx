import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import User from "./User";

export default class Users extends Component {
  render(props) {
    return (
      <Container>
        <Row>
          {this.props.userInfo.map((user, index) => {
            return (
              <User
                userInfo={user}
                key={user.id}
                deleteInfo={this.props.deleteInfo}
                editInfo={this.props.editInfo}
              />
            );
          })}
        </Row>
      </Container>
    );
  }
}
