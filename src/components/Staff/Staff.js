import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
// import Diamond from '../../assets/linux_logo.jpg';
import img1 from "../../image/teach-1.jpeg";
import img2 from "../../image/teach-2.jpg";
import img3 from "../../image/teach-3.jpg";
import img4 from "../../image/teach-4.jpg";
import img5 from "../../image/teach-5.jpg";
import img6 from "../../image/teach-6.jpg";

const Staff = () => {
  return (
    <div>
      <Container>
        <h1 className="mb-4">Certified Teacher</h1>
        <Row>
          <Col className="mb-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={img1} width="200px" height="200px" />
              <Card.Body>
                <Card.Title>Sailana hanif</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  English-Teacher
                </Card.Subtitle>

                <Card.Text>
                  An english teacher is responsible for ensuring that students
                  learn proper grammar, writing, and reading comprehension. They
                  are responsible for creating lesson plans that will teach
                  students the skills they need
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={img2} width="200px" height="200px" />
              <Card.Body>
                <Card.Title>Miss Alina Taylor</Card.Title>

                <Card.Subtitle className="mb-2 text-muted">
                  Math-Teacher
                </Card.Subtitle>

                <Card.Text>
                  Great math teachers focus not only on the content being taught
                  but also on the students. They have a caring attitude towards
                  their students and are always ready to support those who are
                  having problems.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col className="mb-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={img3} width="200px" height="200px" />
              <Card.Body>
                <Card.Title>Andrew philips</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Physics-Teacher
                </Card.Subtitle>

                <Card.Text>
                  Physics teachers are responsible for educating students on the
                  laws of matter and energy. Physics teachers must prepare
                  lesson plans, assign homework,students on the
                  information.teachers are responsible for educating.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col className="mb-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={img4} width="200px" height="200px" />
              <Card.Body>
                <Card.Title>Mr.Sulaiman </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Economics-Teacher
                </Card.Subtitle>

                <Card.Text>
                  Economics teachers typically work with high school or college
                  students. ... An economics teacher shares knowledge about
                  finances, business, macroeconomics, microeconomics, technology
                  and personal finance. These teachers prepare lesson plans,
                  lecture, give exams, grade student work and assist students as
                  needed.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col className="mb-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={img5} width="200px" height="200px" />
              <Card.Body>
                <Card.Title>Green Smith</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  chemistry-Teacher
                </Card.Subtitle>

                <Card.Text>
                  Chemistry teachers help students learn about compounds,
                  elements, molecules, atoms, ions, and chemical reactions. They
                  are employed in high schools and typically use their skills to
                  educate and inspire students. Chemistry teachers may also
                  develop syllabi, oversee experiments, and accompany students
                  on field trips.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col className="mb-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={img6} width="200px" height="200px" />
              <Card.Body>
                <Card.Title>Mariya Mandela</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  English-Teacher
                </Card.Subtitle>

                <Card.Text>
                  An english teacher is responsible for ensuring that students
                  learn proper grammar, writing, and reading comprehension. They
                  are responsible for creating lesson plans that will teach
                  students the skills they need.For prospective high school
                  teachers, getting a job isn't always easy.And applicants need
                  to make sure they have.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Staff;
