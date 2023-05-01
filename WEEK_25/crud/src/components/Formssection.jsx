import React, { Component } from "react";

export default class extends Component {
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
    console.log(this.state);
  };

  formSubmit = (e) => {
    e.preventDefault();
    this.props.addUser(this.state);
    this.setState({
      name: "",
      phone: "",
      location: "",
    });
  };
  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <div className="mb-3 navbar-light">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="name"
            onChange={this.inputChange}
            value={this.state.name}
            autoComplete="off"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Phone Number
          </label>
          <input
            type="tel"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="phone"
            onChange={this.inputChange}
            value={this.state.phone}
            autoComplete="off"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Location
          </label>
          <input
            type="country"
            className="form-control"
            id="exampleInputPassword1"
            name="location"
            onChange={this.inputChange}
            value={this.state.location}
            autoComplete="off"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    );
  }
}
