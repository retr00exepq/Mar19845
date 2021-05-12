import React, { Component, useEffect, useState } from "react";
import './Categorias.css'
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
function Categorias() {
    const [productos, setUser] = useState([]);


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
            <div class=".container-sm">
                <div class="row row-cols-4">
                    {
                        productos.map(data => {
                            return (
                                <div key ={data.id}class="col">
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={`data:image/png;base64,${data.image_1920}`} />
                                        <Card.Body>
                                            <Card.Title>{data.display_name}</Card.Title>
                                            <Card.Text>
                                                {data.description}
                                            </Card.Text>
                                            <Link to={`/producto/${data.id}`}>
                                                <Button variant="primary">Ver Producto</Button>
                                            </Link>
                                            
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )

}
export default Categorias;