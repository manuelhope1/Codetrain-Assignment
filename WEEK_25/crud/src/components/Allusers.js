import React, { Component } from "react";
import User from "./User";
export default class allusers extends Component {
  render(props) {
    return (
      <div
        className="row"
        style={{
          marginTop: "20px",
        }}>
        {this.props.userData.map((user, index) => {
          return <User newUser={user} key={index} />;
        })}
      </div>
    );
  }
}
