import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import User from "./User";
import { useSelector } from "react-redux";

export default function Users(props) {
  const state = useSelector((state) => {
    return state.userReducer;
  });
  console.log(state);
  return (
    <Container>
      <Row>
        {state.users.map((user, index) => {
          return (
            <User
              userInfo={user}
              key={index}
              deleteUser={props.deleteUser}
              editUser={props.editUser}
            />
          );
        })}
      </Row>
    </Container>
  );
}
