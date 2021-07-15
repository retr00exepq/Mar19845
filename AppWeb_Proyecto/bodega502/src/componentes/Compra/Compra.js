import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Compra_style.css";

export default function Compra({ match }) { 

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
  });

  async function venta() {
    await fetch('http://localhost:3001/pedido',{method: "POST", 
    headers: { "content-type": "application/json" },
    body: JSON.stringify({"id": parseInt(match.params.id),
                          "list_price": parseFloat(product.list_price),    
                        })})
        .then(response => response.json())
        .then(data =>{
            SetProduct(data[0])          
        })
  }

    return (
      <div className="main_div_compra">
        <div className="compra_grid_row">
          <div className="compra_grid_column">
            <div>
              <text>Nombre: {product.display_name}</text>
            </div>
            <div>
              <text>Precio: {product.list_price}</text>
            </div>
          </div>
          <div className="compra_grid_column">
            <div>
                <text>Descripcion: {product.description}</text>
            </div>
          </div>
        </div>
        <div className="compra_grid_row" style={{marginTop: "400px", left: "26%", gap: "10rem"}}>
          <Link to={"../"}>
            <button className='return_button' type="button">Regresar al Catalogo</button>
          </Link>
          <button className='venta_button' type="button" onClick={() => {venta()}}>Comprar Producto</button>
        </div>
      </div>
    );
} 