import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import ResponsiveOffCanvas from "./ResponsiveOffCanvas";

// import Nadia from "../assets/Nadia.png";
import resume from "../assets/NadiaAyad.pdf";

class NavbarComp extends Component {
  render() {
    return (
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="lg"
        className="nav bg-body-tertiary"
      >
        <Container>
          <Navbar.Brand href="home">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <ResponsiveOffCanvas />
              <Nav.Link href={resume} download="Nadia_Ayad">
                Resume
              </Nav.Link>
              <Nav.Link href="contact">Contact</Nav.Link>
              <Nav.Link href="about">About</Nav.Link>
              <NavDropdown title="More" id="basic-nav-dropdown">
                <NavDropdown.Item href="repositories">
                  Repositories
                </NavDropdown.Item>
                <NavDropdown.Item href="reviews">Reviews</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="https://knayad.github.io/nadia.github.io/">
                  OG website (Outdated)
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavbarComp;
