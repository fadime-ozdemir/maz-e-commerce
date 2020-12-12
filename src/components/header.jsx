import React from "react";
import { Jumbotron, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Jumbotron fluid>
        <Container>
            <h1>Bibi's store</h1>
            <p>
                Make a gift for yourself today!
            </p>
            <Link to="/shirts">
                <Button>See our shirts &#8594;</Button>
            </Link>
        </Container>
    </Jumbotron>
  );
}
