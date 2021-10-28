import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from "react-router-dom";
import useAuth from '../../Hooks/useAuth';
import logo from '../../logos/Group 1329.png'
const Header = () => {
  const { user, logout } = useAuth();
  const admin = "wahedemon09@gmail.com";
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" fixed="top" className="bg-light">
          <Container>
            <Link to="/" className="w-25">
              <img src={logo} alt="" className="w-50" />
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link
                  as={NavLink}
                  activeStyle={{
                    fontWeight: "bold",
                    color: "rgb(12, 160, 160)",
                  }}
                  to="/home"
                  className="fw-bold mx-3"
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  activeStyle={{
                    fontWeight: "bold",
                    color: "rgb(12, 160, 160)",
                  }}
                  to="/myevents"
                  className="fw-bold mx-3"
                >
                  My Events
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  activeStyle={{
                    fontWeight: "bold",
                    color: "rgb(12, 160, 160)",
                  }}
                  to="/blog"
                  className="fw-bold  mx-3"
                >
                  Blog
                </Nav.Link>
              </Nav>
              <Nav>
                {user.uid ? (
                  <h6 className="mt-3 fw-bold px-2">{user.displayName}</h6>
                ) : (
                  <Nav.Link as={Link} to="/register">
                    <button className="btn btn-outline-danger fw-bold">
                      Register
                    </button>
                  </Nav.Link>
                )}
                <div>
                  {user.uid && (
                    <img
                      src={user?.photoURL}
                      alt=""
                      className="w-50 d-none d-lg-block rounded-circle mx-auto"
                    />
                  )}
                </div>
                {user.uid && (
                  <button className=" btn" onClick={logout}>
                    <i className="fas fs-5 fa-sign-out-alt"></i>
                  </button>
                )}
                {user.email === admin && (
                  <Nav.Link as={Link} to="/admin">
                    <button className="btn btn-secondary fw-bold">Admin</button>
                  </Nav.Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default Header;