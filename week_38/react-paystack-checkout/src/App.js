import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import "./App.css";
import { Col, Container, Form, Row } from "react-bootstrap";

function App() {
  const publicKey = "pk_test_9688edb2f206cf707b0276dac5e09819817d7e77";
  const [pay, setPay] = useState(0);
  const amount = pay * 100;
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const componentProps = {
    email,
    amount,
    currency: "GHs",
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Make Payment",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! Don't leave :("),
  };
  return (
    <Container>
      <Row>
        <div className="bod">
          {" "}
          <Col md="6">
            <h1 className="headd">PAYSTACK IMPEMENTATION</h1>
            <div className="formm">
              <Form.Group className="mb-3"  >
                <Form.Label>Name</Form.Label>
                <Form.Control
                  placeholder="Enter your name"
                  type="text"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="tel"
                  id="phone"
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone number"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Amount</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="How much do you want to pay"
                  id="alert"
                  onChange={(e) => setPay(e.target.value)}
                />
              </Form.Group>
              <PaystackButton {...componentProps} className="payb" />
            </div>

          </Col>
        </div>
      </Row>
    </Container>
  );
}

export default App;
