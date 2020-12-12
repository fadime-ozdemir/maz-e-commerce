import React from 'react'
import shirtsList from "./shirtsList";
import { Container } from "react-bootstrap";
import  SingleShirtCard from "../components/singleShirtCard";
import { Link } from "react-router-dom";

export default function ShirtsCategory() {
    return (
        <Container className="d-flex flex-wrap">
           {shirtsList.map(shirt=><SingleShirtCard shirt={shirt}/>)} 
        </Container>
    )
}
