import React, { Component } from "react";

export default class ClassForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  handleInput = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
};


	handleSubmit = (e) => {
		e.preventDefault();
		let details = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
		};
		this.setState({ details });
		console.log(details);
	};


  render() {
    return (
      <>
        <div className="box">
          <h3>React Form</h3>
          <form className="form" onSubmit={this.handleSubmit}>
            <label>NAME</label> 
            <input type="text" name="name" className="input push" onChange={this.handleInput}/>
            <br />
            <label>EMAIL</label>
            <input type="email" name="email" className="input push" onChange={this.handleInput}/>
            <br />
            <label>PASSWORD</label>
            <input type="password" name="password" className="input" onChange={this.handleInput}/>
            <br />
            <input type="submit" className="submit" />
          </form>
        </div>

         
      </>
    );
  }
}
