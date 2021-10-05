import React from "react";
import "./Footer.css";
import { Form, Row, Col, Container } from "react-bootstrap";
const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col>
            <h1>Visit us</h1>
            <ul>
              <li> Rangpur,co bazar 1/3 road</li>
              <li> +2 392 3929 210</li>
              <li>info@yourdomain.com</li>
            </ul>
          </Col>
          <Col>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  className="form"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Messages</Form.Label>
                <Form.Control as="textarea" rows={2} className="form" />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
      <hr />
      <h1 className="mt-3">Copyright ©2021 All rights reserved </h1>
    </div>
  );
};

export default Footer;
