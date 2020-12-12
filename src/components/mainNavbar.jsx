import React from 'react'
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function MainNavbar() {
    return (
        <Navbar collapseOnSelect expand="lg">
            <NavLink to="/" className="navbar-brand">
                <Navbar.Brand>Home</Navbar.Brand>
            </NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink to="/shirts" className="nav-link">
                        Shirts
                    </NavLink>
                    <NavLink to="/dresses" className="nav-link">
                        Dresses
                    </NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
