/* eslint-disable no-unused-vars */
import './Producto.css';
import sillon from './sillonPrueba.jpg';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from './Carrousel';
import React, { Component, useEffect, useState } from "react";
//import odoo from '..../src/oddo.js'


export default function Producto({ match }) {
    const [product, SetProduct] = useState([]);
    function prueba() {
        fetch('http://localhost:3001/getProduct',{method: "POST", 
        headers: { "content-type": "application/json" },
        body: JSON.stringify({"id": parseInt(match.params.id)})})
            .then(response => response.json())
            .then(data =>
                console.log(data)
            )
        
    }
    useEffect(() => {
        prueba()
    }, []);
    return (
        <Container fluid>
            <Row >
                <Col xs={6} sm={6} md={6} lg={6} className="Ima">
                    <Carousel></Carousel>

                </Col>
                <Col xs={6} sm={6} md={6} lg={6} className="Des">
                    <div>Nombre:{ }</div>
                    <div>Precio: { }</div>
                    <div>Descripción:{ }</div>
                    <div>Cantidad disponible:{ }</div>
                </Col>
            </Row>
            <Row xs={12} sm={12} md={12} lg={12}>
                <Col xs={12} sm={12} md={12} lg={12} className="Rec">recomendaciones</Col>
            </Row>
        </Container>
    );


}

