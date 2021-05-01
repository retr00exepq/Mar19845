import React, { Component, useEffect, useState } from "react";
import { Carousel } from 'react-bootstrap';
import bodega from './sillon.jpg';
import sillon from './Sillon2.jpg';
import cama from './Cama.jpg';
import './Inicio.css';
import Producto from "../Producto/Producto";

const Odoo = require('odoo-xmlrpc')

//className="CaruselDiv"
function Ofertas() {

  const [users, setUser] = useState([]);

  const [name, SetName] = useState('Javier');
  const [precio, setP] = useState('Javier');
  const [desc, setD] = useState('Javier');
  const [qua, setQ] = useState('Javier');
  const[imag,setI]= useState()
  function prueba() {
    fetch('http://localhost:3001/productos')
      .then(response => response.json())
      .then(data =>
        setUser(data)
      );
  }
  useEffect(() => {
    prueba()
  }, []);
  const producto = (name,price,description,quantity,image_1920) => {
       SetName(name)
       setP(price)
       setD(description)
       setQ(quantity)
       setI(image_1920)
  }
  return (
    <div>
      <Carousel >


        {users && users.filter(data=>{
            if (data.description === 'Utiles oficina'){
              return data
            }
        }).map(data => {
          return (

            <Carousel.Item key={data.id}>
              
              <img
                id={data.id}
                src={data.image_1920}
                alt={data.display_name}
                className="Imagen"
                onClick={()=>{
                  producto(data.display_name,data.list_price,data.description,data.qty_available,data.image_1920)
                }}
              />
            </Carousel.Item>
          )

        })}
      </Carousel>
      <div>
        <Producto name={name} price={precio} description={desc} quantity={qua} image_1920={imag}/>
      </div>
    </div>
  );
}

export default Ofertas;