import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import "./ServicesCard.css";
const ServicesCard = (props) => {
  const { title, img, description } = props.service;

  return (
    <div className="card-gap">
      <Col>
        <Card style={{ width: "18rem", margin: "10px" }}>
          <img src={img} alt="" width="100%" height="200px" />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Button variant="primary">Join course</Button>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default ServicesCard;
