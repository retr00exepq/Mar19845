import React, { useState, useEffect } from "react";
import Select from 'react-select';
import "./Editor_style.css";

export default function Editor({ match }) { 
  // setValue0(product.display_name) 
  //       setValue1(product.list_price) 
  //       setValue2(product.qty_available) 
  //       setValue3(product.description) 

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

  async function actualizar() {
    console.log(newQuantity)
    if (!newName){
      setValue0(product.display_name)
    }
    if (newPrice < 0){
      setValue1(product.list_price)
    }
    if (newQuantity < 0){
      setValue2(product.qty_available)
    }
    if (!newDescription){
      setValue3(product.description)
    }

    await fetch('http://localhost:3001/act',{method: "POST", 
    headers: { "content-type": "application/json" },
    body: JSON.stringify({"id": match.params.id,
                          "display_name": newName,
                          "list_price": newPrice,
                          "qty_available": parseInt(newQuantity),
                          "description": newDescription
                        })})
        .then(response => response.json())
        .then(data =>{
            SetProduct(data[0])          
        })
  }

  const [newName, setValue0] = useState('')
  const [newPrice, setValue1] = useState(-1)
  const [newQuantity, setValue2] = useState(-1)
  const [newDescription, setValue3] = useState('')
  
  // function financial(x) {
  //   return Number.parseFloat(x).toFixed(2);
  // }
  
  const options = [
    { value: 'mueble', label: 'Mueble' },
    { value: 'interiores', label: 'Interiores' },
    { value: 'Jardineria', label: 'Jardineria' },
  ]

  const onChange0 = event => {
    setValue0( event.target.value );
  };

  const onChange1 = event => {
    setValue1( event.target.value );
  };

  const onChange2 = event => {
    setValue2( event.target.value );
  };

  const onChange3 = event => {
    setValue3( event.target.value );
  };

    return (
      <div className="main_div" data-testid="existe1">
        <div className="grid_row">
          <div>
              <text>Nombre del producto: </text>
              <input type="text" name="name" maxLength={100} className="title_input" defaultValue={product.display_name} onChange={onChange0}/>
          </div>
          <div>
            <text>Seleccione el tipo de producto</text>
          </div>
          <div>
            <Select
              className="basic-single"
              classNamePrefix="select"
              defaultValue={options[0]}
              isSearchable={true}
              name="product-type"
              options={options}
            />
          </div>
        </div>
        <div className="grid_row" style={{marginTop: "100px", height: "250px", paddingLeft: "100px"}}>
            <text>Precio del producto (Q): </text>
            <input type="number" maxLength={50} className="number_input" defaultValue={product.list_price} onChange={onChange1}/>
            <div style={{paddingLeft: "100px"}}>
              <text>Cantidad en existencia:</text>
              <input type="number" name="name" maxLength={50} className="number_input" defaultValue={product.qty_available} onChange={onChange2}/>
            </div>
        </div>
        <div className="grid_row_p" style={{marginTop: "200px", gridAutoFlow: "row"}}>
          <text>Descripcion del producto</text>
          <textarea className="description" type="text" name="name" maxLength={500} defaultValue={product.description} onChange={onChange3}/>
        </div>
        <div className="grid_row" style={{marginTop: "800px", left: "26%", gap: "10rem"}}>
            <button className='guardar_button' type="button" onClick={() => {actualizar()}}>Guardar Cambios</button>
            <button className='eliminar_button' type="button">Eliminar Publicacion</button>
        </div>
      </div>
    );
} 