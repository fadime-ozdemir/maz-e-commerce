import React from 'react'
import shirtsList from "./shirtsList";
import { Container } from "react-bootstrap";
import  SingleShirtCard from "../components/singleShirtCard";
import { Link } from "react-router-dom";

export default function ShirtsCategory() {
    return (
        <Container className="d-flex flex-wrap">
           {shirtsList.map((shirt, index)=><SingleShirtCard shirt={shirt} key={index + toString(Math.floor(Math.random() * 999))} />)} 
        </Container>
    )
}
