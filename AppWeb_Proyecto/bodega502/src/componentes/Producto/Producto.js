/* eslint-disable no-unused-vars */
import './Producto.css';
import sillon from './sillonPrueba.jpg';
import noAvailable from './image_nd.png';
import Grid from '@material-ui/core/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';


import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import odoo from '..../src/oddo.js'


export default function Producto({ match }) {
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
    }, []);

    return (
        <Grid container spacing = {3}>
            <Grid item>
                    <Card sx ={{width: 600, height: 600}} elevation = {5}>
                        <CardMedia className = 'imagen_producto' component = "img" image = {noAvailable} alt = {product.display_name}/>
                    </Card>
            </Grid>
            <Grid item md = {6}>
                <Typography variant = "h3" component = "div" >Nombre: 
                <Typography variant = "h4" color = "text.secondary">{product.display_name}</Typography></Typography>
                <Typography variant = "h3" component = "div" >Precio:
                <Typography variant = "h4" color = "text.secondary">{product.list_price}</Typography></Typography>
                <Typography variant = "h3" component = "div" >Descripción: 
                <Typography variant = "h4" color = "text.secondary">Esta es una descripción {product.description}</Typography></Typography>
                <Typography variant = "h3" component = "div" >Cantidad disponible: 
                <Typography variant = "h4" color = "text.secondary">{product.qty_available}</Typography></Typography>

            <Stack spacing = {2} direction = "column" >
                <Button href = {`/editor/${product.id}`} variant = "contained" size = "large" >Editar Producto</Button>
                <Button href = {`/compra/${product.id}`} variant = "contained" size = "large">Pedir Producto</Button>
            </Stack>
            </Grid>
        </Grid>
    );


}

