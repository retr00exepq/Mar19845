import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Select from 'react-select';
import "./Editor_style.css";
import Grid from '@material-ui/core/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button';
import {makeStyles} from '@material-ui/core'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export default function Editor({ match }) { 

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

  async function actualizar() {
    console.log(newQuantity)
    await fetch('http://18.116.48.246:3001/act',{method: "POST", 
    headers: { "content-type": "application/json" },
    body: JSON.stringify({"id": parseInt(match.params.id),
                          "display_name": newName === '' ? product.display_name : newName,
                          "list_price": newPrice < 0 ? product.list_price : parseFloat(newPrice),
                          "qty_available": newQuantity < 0 ? product.qty_available : parseInt(newQuantity),
                          "description": newDescription === '' ? product.description : newDescription
                        })})
        .then(response => response.json())
        .then(data =>{
            SetProduct(data[0])          
        })
  }

  async function eliminar() {
    await fetch('http://18.116.48.246:3001/delete',{method: "POST", 
    headers: { "content-type": "application/json" },
    body: JSON.stringify({"id": parseInt(match.params.id)})})
        .then(response => response.json())
        .then(data =>{
            SetProduct(data[0])          
        })
  }

  const [newName, setValue0] = useState('')
  const [newPrice, setValue1] = useState(-1)
  const [newQuantity, setValue2] = useState(-1)
  const [newDescription, setValue3] = useState('')
  
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

  /*const useStyles = makeStyles({
    stack1:{
      position: "absolute",
      marginTop: 400,
      marginLeft:100
    },
    stack2:{
      position: "absolute",
      marginTop: 400,
      marginLeft:360
    },
  })*/
  /*<Stack className={classes.stack1} spacing={4}>*/ 
  //const classes = useStyles()
    return(
      <Grid container spacing={2} xs={12} sm={6} md={3}>
        <div className ='texto'>
          <Grid item>
            <Stack spacing={6}>
                <Typography variant = "h5" component = "div" >Nombre del Producto: </Typography>  
                <Typography variant = "h5" component = "div" >Precio del Producto:</Typography>
                <Typography variant = "h5" component = "div" >Cantidad en Existencia: </Typography>  
                <Typography variant = "h5" component = "div" >Seleccione el tipo de producto: </Typography>  
            </Stack>
            </Grid>
        </div>
        <div className ='campos'>
        <Grid item>
            <Stack spacing={6} item md = {6}>
            <input type="text" name="name" maxLength={100} className="title_input" defaultValue={product.display_name} onChange={onChange0}/>
            <input type="number" maxLength={50} className="number_input" defaultValue={product.list_price} onChange={onChange1}/> 
            <input type="number" name="name" maxLength={50} className="number_input" defaultValue={product.qty_available} onChange={onChange2}/>
            <Select
              className="basic-single"
              classNamePrefix="select"
              defaultValue={options[0]}
              isSearchable={true}
              name="product-type"
              options={options}
            />
            </Stack>
            </Grid>
        </div>

        <div className="desc">
        <Grid item>
          <Stack spacing={6}>
          <Typography variant = "h5" component = "div" >Descripcion del producto: </Typography>  
          <textarea className="description" type="text" name="name" maxLength={500} defaultValue={product.description} onChange={onChange3}/>
          </Stack>
          </Grid>
        </div>

        <div className="botones">
        <Grid container spacing={6}>
          <Grid item>
        <button className='guardar_button' type="button" onClick={() => {actualizar()}}>Guardar Cambios</button>
        </Grid>
        <Grid item>
        <button className='eliminar_button' type="button" onClick={() => {eliminar()}}>Eliminar Publicacion</button>
        </Grid>
          </Grid>
        </div>

      </Grid>
    )

    /*return (
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
          <Link to={"../"}>
            <button className='guardar_button' type="button" onClick={() => {actualizar()}}>Guardar Cambios</button>
          </Link>
          <Link to={"../"}>
            <button className='eliminar_button' type="button" onClick={() => {eliminar()}}>Eliminar Publicacion</button>
          </Link>
        </div>
      </div>
    );*/
} 