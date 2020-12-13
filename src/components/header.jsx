import React from "react";
import { Jumbotron, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./header.scss";

export default function Header() {
  return (
    <Jumbotron fluid className="header d-flex align-items-center justify-content-center mb-0">
        <Container>
            <h1 className="headerTitle">Bibi's store</h1>
            <p>
                Make a gift for yourself today!
            </p>
            <Link to="/shirts">
                <Button className="btn-primary shadow-none">See our shirts &#8594;</Button>
            </Link>
        </Container>
    </Jumbotron>
  );
}
