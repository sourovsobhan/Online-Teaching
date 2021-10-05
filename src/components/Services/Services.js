import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ServicesCard from "../ServicesCard/ServicesCard";
import "./Services.css";
const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./services-data.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div>
        <h1> Our Services</h1>
      </div>

      <Container>
        <Row md={4}>
          {services.map((service) => (
            <ServicesCard service={service} key={service.id}></ServicesCard>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
