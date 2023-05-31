import axios from "axios";
import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import Moviecard from "./Moviecard";

export default class Movielist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
    };
  }

  Fetchlist = async () => {
    try {
      const res = await axios.get(
        "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=fOAONgN1SwQT0oAaXQ2lKiuygJXPMfq8"
      );
      const data = await res.data.results;
      console.log(data);
      this.setState({ lists: data });
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    this.Fetchlist();
  }
  render() {
    return (
      <Container>
        <Row>
          <h1 className="toppp">Using Class Component</h1>
          {this.state.lists.map((info, index) => {
            return <Moviecard info={info} key={index} />;
          })}
        </Row>
      </Container>
    );
  }
}
