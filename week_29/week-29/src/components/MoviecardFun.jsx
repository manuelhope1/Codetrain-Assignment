import React from "react";
import { Card, Col, Table } from "react-bootstrap";
import img from "../components/mcard2.avif";

const MoviecardFun = (props) => {
  return (
    <Col sm="12" md="6" lg="4" xl="3">
      {" "}
      <Card
        bg="dark"
        text="white"
        style={{ marginTop: "20px", height: "480px" }}>
        <Card.Img variant="top" src={img} className="imgg" />
        <Card.Body>
          <Card.Title>{props.info.display_title}</Card.Title>
          <Table striped="columns" variant="dark">
            <tbody>
              <hr style={{ margin: "0", padding: "0" }} />
              <tr className="tab">
                <td>{props.info.headline}</td>
              </tr>
              <tr className="tab">
                <td>
                  {" "}
                  <span className="byy">Byline:</span> {props.info.byline}
                </td>
              </tr>
              <tr className="tab">
                <td>
                  {" "}
                  <span className="byy">Rating ⭐:</span>{" "}
                  {props.info.mpaa_rating}
                </td>
              </tr>
              <tr className="tab">
                <td>
                  {" "}
                  <span className="byy">Critic Pick 🔴 :</span>{" "}
                  {props.info.critics_pick}
                </td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>{" "}
    </Col>
  );
};

export default MoviecardFun;
