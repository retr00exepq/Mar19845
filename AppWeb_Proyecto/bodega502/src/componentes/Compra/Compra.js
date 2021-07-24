import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Compra_style.css";

export default function Compra({ match }) { 

  const [product, SetProduct] = useState({});
    async function prueba() {
        await fetch('http://18.116.48.246:3001/getProduct',{method: "POST", 
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
    console.log(userName)
    if (userName.length === 0 || userPhone.length === 0 || userMail.length === 0 || userAdress.length === 0){
      alert('Debe llenar todos los campos')
    }else{
      await fetch('http://18.116.48.246:3001/pedido',{method: "POST", 
      headers: { "content-type": "application/json" },
      body: JSON.stringify({"id": parseInt(match.params.id),
                          "list_price": parseFloat(product.list_price),
                          "user_name": userName,
                          "user_mobile": userPhone,
                          "user_email": userMail,
                          "user_adress": userAdress,    
                        })})
        .then(response => response.json())
        .then(data =>{
            SetProduct(data[0])          
        })
    }
  }

  const [userName, setUserName] = useState('')
  const [userPhone, setUserPhone] = useState('')
  const [userMail, setUserMail] = useState('')
  const [userAdress, setUserAdress] = useState('')

  const onChangeUserName = event => {
    setUserName( event.target.value );
  };

  const onChangeUserPhone = event => {
    setUserPhone( event.target.value );
  };

  const onChangeUserMail = event => {
    setUserMail( event.target.value );
  };

  const onChangeUserAdress = event => {
    setUserAdress( event.target.value );
  };

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
        <div style={{marginTop: "10px"}}>
          <text style={{textAlign: 'center'}}>Sus datos</text>
          <div>
              <text>Nombre: </text>
              <input type="text" name="name" maxLength={100} onChange={onChangeUserName}/>
          </div>
          <div>
              <text>Telefono: </text>
              <input type="text" name="name" maxLength={100} onChange={onChangeUserPhone}/>
          </div>
          <div>
              <text>Correo:</text>
              <input type="text" name="name" maxLength={100} onChange={onChangeUserMail}/>
          </div>
          <div>
              <text>Direccion:</text>
              <input type="text" name="name" maxLength={100} onChange={onChangeUserAdress}/>
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