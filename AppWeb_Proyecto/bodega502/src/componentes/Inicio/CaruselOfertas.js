import React, { Component, useEffect, useState } from "react";
import { Carousel } from 'react-bootstrap';
import bodega from './sillon.jpg';
import sillon from './Sillon2.jpg';
import cama from './Cama.jpg';
import './Inicio.css';
import Producto from "../Producto/Producto";
import { Link } from "react-router-dom";


//className="CaruselDiv"
function Ofertas() {

  const [users, setUser] = useState([]);

  
  async function prueba() {
    await fetch('http://localhost:3001/productos')
      .then(response => response.json())
      .then(data =>
        setUser(data)
      );
  }
  
  useEffect(() => {
    prueba()
  }, []);
  
  return (
    <div>
      <Carousel >


        {users && users.filter(data => {
          if (data.description === 'Utiles oficina') {
            return data
          }
        }).map(data => {
          return (
            <div>
              <Carousel.Item key={data.id}>
              <Link to={`/producto/${data.id}`}>
                <img
                  id={data.id}
                  src={data.image_1920}
                  alt={data.display_name}
                  className="Imagen"/>
                </Link>
              </Carousel.Item>
            </div>
          )

        })}
      </Carousel>

    </div>
  );
}

export default Ofertas;