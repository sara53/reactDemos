import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function MyNav() {
  return (
    <Navbar bg="dark" className="navbar-dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          Movie Star <i className="bi bi-stars"></i>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="nav-link" to="/movies">
              Home
            </NavLink>
            <NavLink className="nav-link" to="counter">
              Counter
            </NavLink>
            <NavLink className="nav-link" to="products">
              products
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
