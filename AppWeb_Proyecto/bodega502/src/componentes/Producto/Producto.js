/* eslint-disable no-unused-vars */
import './Producto.css';
import sillon from './sillonPrueba.jpg';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from './Carrousel';
import React, { Component } from "react";
//import odoo from '..../src/oddo.js'


export default class Producto extends React.Component{
    constructor(){
        super();

        this.state ={
        nombre: "",
        precio:"",
        descripcion:"",
        detalles:"",
        }
    }

    consultar = () => {
        this.setState({nombre: "Javier"})
    }

    render(){
    return(    
        <Container fluid>
            <Row >
                <Col xs={6} sm={6} md={6} lg={6} className="Ima">
                    <Carousel></Carousel>
                </Col>
                <Col xs={6} sm={6} md={6} lg={6} className="Des"> 
                    <div /*NECESITO EJECUTAR ESTA CONSULTA AL CARGAR EL COMPONENTE
                    */onClick = {() => this.consultar()}>Nombre:{this.state.nombre}</div> 
                    <div>Precio:</div>
                    <div>Descripción:</div> 
                    <div>Cantidad disponible:</div>
                </Col>
            </Row>
            <Row xs={12} sm={12} md={12} lg={12}>
                <Col xs={12} sm={12} md={12} lg={12} className="Rec">recomendaciones</Col>
            </Row>
        </Container>
    );
                    }
}

