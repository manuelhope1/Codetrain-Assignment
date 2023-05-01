import logo from "./logo.svg";
import "./App.css";

import React, { Component } from "react";
import Formssection from "./components/Formssection";
import Allusers from "./components/Allusers";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
    };
  }

  addPerson = (userr) => {
    this.setState({ user: [...this.state.user, userr] });
  };

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-info p-3">
          <div className="container-fluid nav">
            <a className="navbar-brand a" href="#">
              My Contacts
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className=" collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ms-auto ">
                <li className="nav-item">
                  <a
                    className="nav-link mx-2 active a"
                    aria-current="page"
                    href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-2" href="#">
                    Favourites
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-2" href="#">
                    Pricing
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto d-none d-lg-inline-flex">
                <li className="nav-item mx-2">
                  <a className="nav-link text-dark h5" href="#" target="blank">
                    <i className="bx bx-search a" id="search"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 form">
              <Formssection addUser={this.addPerson} />
            </div>
            <div className="col-md-8">
              <Allusers userData={this.state.user} />
            </div>
          </div>
        </div>
      </>
    );
  }
}
