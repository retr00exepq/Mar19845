import React from 'react';
import { Carousel } from 'react-bootstrap';
import bodega from './sillon.jpg';
import './Inicio.css';
function Ofertas() {
  return (
    
    <Carousel >
      <Carousel.Item>
        <img
          src={bodega}
          alt="First slide"
          className="Imagen"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={bodega}
          alt="First slide"
          
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={bodega}
          alt="First slide"
         
        />
      </Carousel.Item>
    </Carousel>
      
  );
}

export default Ofertas;