import React from "react";
import Container from "react-bootstrap/Container";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "../style/navbar.css"
import { Link } from "react-router-dom";

const NaviBar = () => {
    return(
        <Navbar bg="light" expand="lg">
            <Container className="d-flex">
                <Navbar.Brand>
                    <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                    ArtMedial
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                <Nav id="basic-navbar-nav" className="justify-content-center">
                    <Nav.Item>
                        <Link to="/"  style={{ textDecoration: "none", color: "black", lineHeight:"38px", marginRight:"20px", color:"gray" }}>
                        Home
                        </Link>
                    </Nav.Item>
                    <NavDropdown title="Kelas" id="basic-nav-dropdown" renderMenuOnMount={true}>  
                    <NavDropdown.Item>
                        <Link to="/kelas" style={{ textDecoration: "none", color: "black" }}>
                        Remedial
                        </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <Link to="" style={{ textDecoration: "none", color: "black" }}>
                        Presisi
                        </Link>
                    </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default NaviBar;