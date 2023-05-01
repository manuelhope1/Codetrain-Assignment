import React from "react";

export default function User(props) {
  return (
    <div className=".col-sm-12 col-md-6 col-lg-4 ">
      <div
        className="card"
        style={{
          marginBottom: "1rem",
          height: "250px",
          borderLeftWidth: "10px",
          borderColor: "#0dcaf0",
        }}>
        <div className="card-body">
          <h6 className="card-subtitle mb-2 text-muted">Contact</h6>
          <h5 className="card-title">{props.newUser.name}</h5>
          <div className="card-text">
            <p>Phone Number: {props.newUser.phone}</p>
            <p>Location: {props.newUser.location}</p>
          </div>
          <a href="#" className="card-link edit">
            Edit
          </a>
          <a href="#" className="card-link del">
            Delete
          </a>
        </div>
      </div>
    </div>
  );
}
