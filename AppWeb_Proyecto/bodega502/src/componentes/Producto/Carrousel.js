import './Carrousel.css';
import Carousel from "react-bootstrap/Carousel"
import sillon from './sillonPrueba.jpg';
import React, { Component } from "react";

export default function Carrusel(props){
    return(
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src={sillon} alt="First slide"/>
                <Carousel.Caption>
                    <h3>Primer Imagen</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={sillon} alt="Second slide"/>
                <Carousel.Caption>
                    <h3>Segunda Imagen</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100"  src={sillon} alt="Third slide"/>
                <Carousel.Caption>
                    <h3>Tercera Imagen</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> 
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}