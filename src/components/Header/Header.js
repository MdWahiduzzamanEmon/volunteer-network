import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../logos/Group 1329.png'
const Header = () => {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" fixed="top" className="bg-light">
          <Container>
            <Link to="/home" className="w-25">
              <img src={logo} alt="" className="w-50" />
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#features" className="fw-bold text-dark mx-3">
                  Home
                </Nav.Link>
                <Nav.Link href="#pricing" className="fw-bold text-dark mx-3">
                  My Events
                </Nav.Link>
                <Nav.Link href="#pricing" className="fw-bold text-dark mx-3">
                  Blog
                </Nav.Link> 
              </Nav>
              <Nav>
                <Nav.Link href="#deets">
                  <button className="btn btn-outline-danger fw-bold">Register</button>
                </Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  <button className="btn btn-secondary fw-bold">Admin</button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default Header;