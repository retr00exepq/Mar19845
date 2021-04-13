/* eslint-disable no-unused-vars */
import './Producto.css';
import sillon from './sillonPrueba.jpg';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from './Carrousel';
import React, { Component } from "react";

const  Odoo = require('odoo-xmlrpc')

const odoo = new Odoo({
  url: 'https://proyecto10.odoo.com',
  //port: 80, /* Defaults to 80 if not specified */
  db: 'proyecto10',
  username : 'cot19324@uvg.edu.gt', /* Optional Like Change Language */
  password: 'ProyectoSoft1234'
})

var params = {
    domain:[['Precio de venta', '=', '4, 32']],
    fields:['Precio de venta'],
    offset: 0,
}

export default function Producto(){
    return(    
        <Container fluid>
            <Row >
                <Col xs={6} sm={6} md={6} lg={6} className="Ima">
                    <Carousel></Carousel>
                </Col>
                <Col xs={6} sm={6} md={6} lg={6} className="Des">
                    <p>Nombre:
                        {
                            odoo.connect(function (err){
                                if (err) { return console.log(err); }
                                console.log('Connected to Odoo server.');
                                Odoo.search_read('product.product', params, function(err, value){
                                    if (err) {return console.log(err);}
                                    console.log('result', value);
                                })
                            })
                        }
                        <br></br>
                    Precio:<br></br>
                    <details>
                        <summary>Descripción</summary><br></br>
                    </details>
                    <details>
                        <summary>Detalles Técnicos</summary><br></br>
                    </details>
                    </p>
                </Col>
            </Row>
            <Row xs={12} sm={12} md={12} lg={12}>
                <Col xs={12} sm={12} md={12} lg={12} className="Rec">recomendaciones</Col>
            </Row>
        </Container>
    );
}

