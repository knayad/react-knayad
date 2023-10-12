import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import ResponsiveOffCanvas from "./ResponsiveOffCanvas";

import resume from "../assets/NadiaAyad.pdf";

class NavbarComp extends Component {
  render() {
    return (
      <div>
        <Navbar expand="lg" className="nav">
          <Container>
            <Navbar.Brand href="home">
              <ResponsiveOffCanvas />
            </Navbar.Brand>
            <Container>
              <Navbar.Brand> </Navbar.Brand>
            </Container>
            <Navbar.Brand href="home">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href={resume} download="Nadia_Ayad">
                  Resume
                </Nav.Link>
                <Nav.Link href="projects">Projects</Nav.Link>
                <Nav.Link href="contact">Contact</Nav.Link>
                <NavDropdown title="More" id="basic-nav-dropdown">
                  <NavDropdown.Item href="about">About</NavDropdown.Item>
                  <NavDropdown.Item href="repositories">
                    Repositories
                  </NavDropdown.Item>
                  <NavDropdown.Item href="reviews">Reviews</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="https://knayad.github.io/nadia.github.io/">
                    OG website (Outdated)
                  </NavDropdown.Item>
                  <NavDropdown.Item href="spline">
                    Spline Avatar
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavbarComp;
