import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./About.css";
import img9 from "../../image/teach-9.jpg";
const About = () => {
  return (
    // about section
    <div>
      <h1>About us</h1>
      <div className="top-margin">
        <Container>
          <Row>
            <Col>
              <h1>We teaches More than 2000 student per year</h1>

              <p>
                A teacher has professional knowledge and skills gained through
                formal preparation and experience. Teachers provide personal,
                caring service to students by diagnosing their needs and by
                planning, selecting and using methods and evaluation procedures
                designed to promote learning. Teaching is the specialized
                application of knowledge, skills and attributes designed to
                provide unique service to meet the educational needs of the
                individual and of society. The choice of learning activities
                whereby the goals of education are realized in the school is the
                responsibility of the teaching profession.
              </p>
            </Col>
            <Col>
              <img src={img9} alt="" srcset="" width="400px" height="400px" />
            </Col>
          </Row>
        </Container>
        <Container className="about-us mt-3">
          <Row>
            <Col>
              <h1> 18 </h1>
              <h5>Certified Teachers</h5>
            </Col>
            <Col>
              <h1>500</h1>
              <h5>Students</h5>
            </Col>
            <Col>
              <h1> 12 </h1>
              <h5>Courses</h5>
            </Col>
          </Row>
        </Container>
        {/* student complement section */}
        <Container fluid="md">
          <h1 className="mb-4"> Student Says About Us</h1>
          <Row>
            <Col>
              <img src={img9} alt="" className="student-img mb-2" />
              <p>
                A good teacher can inspire hope, ignite the imagination, and
                instill a love of learning.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
