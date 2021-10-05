import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import img8 from "../../image/teach-8.jpg";
import "./Home.css";
import ServicesCard from "../ServicesCard/ServicesCard";

// import ServicesCard from "../ServicesCard/ServicesCard";

const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./services-data.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <h1>Online Education</h1>
      <div className="home-container">
        <Container>
          <Row>
            <Col>
              <img src={img8} alt="" width="600px" />
            </Col>
            <Col>
              <h1>Education needs Complete Solution</h1>
              <p>
                Online education enables the teacher and the student to set
                their own learning pace, and there's the added flexibility of
                setting a schedule that fits everyone's agenda. ... Studying
                online teaches you vital time management skills, which makes
                finding a good work-study balance easier.Online learning is
                certainly the more effective option for students, but it's also
                better for the environment. The Open University in Britain have
                found that online courses equate to an average of 90% less
                energy and 85% fewer CO2 emissions per student than traditional
                in person courses.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row md={4}>
          {services.slice(0, 6).map((service) => (
            <ServicesCard service={service} key={service.id}></ServicesCard>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
