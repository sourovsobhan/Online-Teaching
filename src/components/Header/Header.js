import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <header className="header">
        <Navbar expand="lg">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link to="/home" className="header-link">
                  Home
                </Link>
                <Link to="/about" className="header-link">
                  About
                </Link>
                <Link to="/services" className="header-link">
                  Services
                </Link>
                <Link to="/staff" className="header-link">
                  Staff
                </Link>
                <Link to="/contact" className="header-link">
                  Contact
                </Link>
                <Link className="nav-NavLink-left">
                  Sourov online teaching center
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  );
};

export default Header;
