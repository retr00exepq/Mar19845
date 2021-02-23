import React from 'react';
import { Carousel } from 'react-bootstrap';
import bodega from './sillon.jpg';
import sillon from './Sillon2.jpg';
import cama from './Cama.jpg';
import './Inicio.css';


//className="CaruselDiv"
function Ofertas() {
  return (

    <Carousel >
      <Carousel.Item >
        <img

          src={bodega}
          alt="First slide"
          className="Imagen"
        />
      </Carousel.Item>
      <Carousel.Item >
        <img

          src={sillon}
          alt="First slide"
          className="Imagen"
        />
      </Carousel.Item>
      <Carousel.Item >
        <img

          src={cama}
          alt="First slide"
          className="Imagen"
        />
      </Carousel.Item>
    </Carousel>

  );
}

export default Ofertas;