import React from 'react'
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./footer.scss";

export default function Footer() {
    return (
        <Container fluid className="footer">
            <Navbar className="d-flex justify-content-around">
            <NavLink to="/" className="navbar-brand">
                <Navbar.Brand>Bibi's</Navbar.Brand>
            </NavLink>
                <Nav className="ml-auto">
                    <NavLink to="/shirts" className="nav-link">
                        Shirts
                    </NavLink>
                    <NavLink to="/cart" className="nav-link">
                        Cart
                    </NavLink>
                </Nav>
        </Navbar>
        </Container>
    )
}
