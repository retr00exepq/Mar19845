/* eslint-disable no-unused-vars */
import './Producto.css';
import sillon from './sillonPrueba.jpg';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from './Carrousel';
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import odoo from '..../src/oddo.js'


export default function Producto({ match }) {
    const [product, SetProduct] = useState({});
    async function prueba() {
        await fetch('http://localhost:3001/getProduct',{method: "POST", 
        headers: { "content-type": "application/json" },
        body: JSON.stringify({"id": match.params.id})})
            .then(response => response.json())
            .then(data =>{
                SetProduct(data[0])
                
            })
        
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
                    <div>Nombre: {product.display_name}</div>
                    <div>Precio: {product.list_price}</div>
                    <div>Descripción: {product.description}</div>
                    <div>Cantidad disponible: {product.qty_available}</div>
                    <Link to={`/editor/${product.id}`}>
                        <button className="card__btn">Editar Producto</button>
                    </Link>
                    <div>
                        <Link to={`/compra/${product.id}`}>
                            <button className="card__btn">Comprar Producto</button>
                        </Link>
                    </div>
                </Col>
            </Row>
            <Row xs={12} sm={12} md={12} lg={12}>
                <Col xs={12} sm={12} md={12} lg={12} className="Rec">recomendaciones</Col>
            </Row>
        </Container>
    );


}

