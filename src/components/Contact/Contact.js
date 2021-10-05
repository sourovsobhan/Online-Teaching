import React from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import img6 from "../../image/teach-6.jpg";
import "./Contact.css";
const Contact = () => {
  return (
    // contact section
    <div>
      <div className="margin-top">
        <Container>
          <Row>
            <Col>
              <img src={img6} alt="" srcset="" width="400px" height="400px" />
            </Col>

            <Col>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Your Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email </Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Subject" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label className="form-label">Message</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
