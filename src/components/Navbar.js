import React from "react";
import Container from "react-bootstrap/Container";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "../style/navbar.css"

const NaviBar = () => {
    return(
        <Navbar bg="light" expand="lg">
            <Container className="d-flex">
                <Navbar.Brand>
                    ArtMedial
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                <Nav id="basic-navbar-nav" className="justify-content-center">
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Home</Nav.Link>
                    </Nav.Item>
                    <NavDropdown title="Modul" id="basic-nav-dropdown" renderMenuOnMount={true}>  
                    <NavDropdown.Item>
                        Modul 5
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        Modul 6
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        Tugas
                    </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default NaviBar;