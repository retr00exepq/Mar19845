import React, { Component, useEffect, useState } from "react";
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from './componentes/Navbar';
import NavbarPro from './componentes/NavbarPro';
import Ofertas from "./componentes/Inicio/CaruselOfertas";
import Categorias from "./componentes/Inicio/Categorias";
import Producto from "./componentes/Producto/Producto";
import Editor from "./componentes/Editor/Editor";
import Compra from "./componentes/Compra/Compra";
//import Login from "./componentes/Login/Login"
import './custom.scss';
import Spinner from 'react-bootstrap/Spinner';
import { ThemeProvider, createTheme,responsiveFontSizes} from '@mui/material/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// <Producto/>

//color const
const pumpkin = '#f3742b'
const carolina_blue = '#4ea4d9'
const light_golden_yellow = '#fffbd6'
const lime_green = '#47c60c'
const venian_red = '#f3742b'

let theme = createTheme({
  palette: {
    pumpkin:{
      main: pumpkin
    },
    carolina_blue:{
      main: carolina_blue
    },
    light_golden_yellow:{
      main: light_golden_yellow
    },
    lime:{
      main: lime_green
    },
    venian_red:{
      main: venian_red
    },
  },
  typography:{
    fontFamily:[
      'Archivo+Black',
      'Arimo',
      'Hind+Madurai',
    ].join(','),
  },
});

theme = responsiveFontSizes(theme);
function App() {
  return (
    <Router>
      <ThemeProvider theme={theme} >
        <div className="App">
          <Navbar />
          <NavbarPro />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/hogar' exact component={Hogar} />
            <Route path='/otros' exact component={Otros} />
            <Route path='/oficina' exact component={Oficina} />
            <Route path='/luces' exact component={Luces} />
            <Route path='/oferta' exact component={Ofertas} />
            <Route path='/editor' exact component={Editor} />
            <Route path='/compra' exact component={Compra} />

            <Route path='/producto/:id' component={Producto} />
            <Route path='/editor/:id' component={Editor} />
            <Route path='/compra/:id' component={Compra} />
          </Switch>
        </div>
      </ThemeProvider>
    </Router>
  );
}
const Home = () => {
  return (
    <div>
      <Categorias />
    </div>
  )
}
const Otros = () => {
  return (
    <div>
      <Categorias />
    </div>
  )
}
const Hogar = () => {
  const [productos, setUser] = useState([]);
  const [Loading,setLoading]= useState(false)
  async function prueba() {
    await fetch('http://localhost:3001/productosHogar')
        .then(response => response.json())
        .then(data =>
            setUser(data)
        );
    setLoading(true)
  }

  useEffect(() => {
      prueba()
  }, []);
  return (
    <div>
      <div className="wrapper">
                {
                    Loading ?
                    productos.map(data => {
                        return (
                            <Card
                                img={data.image_1920}
                                title={data.display_name}
                                description={data.description}
                                price={data.list_price}
                                id={data.id}
                            />
                        )
                    })
                    :
                    <Spinner animation="border" />
                }
            </div>
    </div>
  )
}

const Oficina = () => {
  const [productos, setUser] = useState([]);
  const [Loading,setLoading]= useState(false)
  async function prueba() {
    await fetch('http://localhost:3001/productosOficina')
        .then(response => response.json())
        .then(data =>
            setUser(data)
        );
    setLoading(true)
  }

  useEffect(() => {
      prueba()
  }, []);
  return (
    <div>
      <div className="wrapper">
                {
                    Loading ?
                    productos.map(data => {
                        return (
                            <Card
                                img={data.image_1920}
                                title={data.display_name}
                                description={data.description}
                                price={data.list_price}
                                id={data.id}
                            />
                        )
                    })
                    :
                    <Spinner animation="border" />
                }
            </div>
    </div>
  )
}


const Luces = () => {
  const [productos, setUser] = useState([]);
  const [Loading,setLoading]= useState(false)
  async function prueba() {
    await fetch('http://localhost:3001/productosLuces')
        .then(response => response.json())
        .then(data =>
            setUser(data)
        );
    setLoading(true)
  }

  useEffect(() => {
      prueba()
  }, []);
  return (
    <div>
      <div className="wrapper">
                {
                    Loading ?
                    productos.map(data => {
                        return (
                            <Card
                                img={data.image_1920}
                                title={data.display_name}
                                description={data.description}
                                price={data.list_price}
                                id={data.id}
                            />
                        )
                    })
                    :
                    <Spinner animation="border" />
                }
            </div>
    </div>
  )
}



export default App;



function Card(props) {
        
  return (
      <div className="card">
          <img src={`data:image/png;base64,${props.img}`} className="card__img" alt='alt' />
          <div className="card__body">
              <h2 className="card__title">{props.title}</h2>
              <p className="card__description">{props.description}</p>
              <h3 className="card__price">{parseFloat(props.price).toFixed(2)}</h3>
              <Link to={`/producto/${props.id}`}>
                  <button className="card__btn">See Product</button>
              </Link>
              
          </div>
      </div>
  );
  
  
}