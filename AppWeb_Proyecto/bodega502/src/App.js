import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from './componentes/Navbar';
import Ofertas from "./componentes/Inicio/CaruselOfertas";
import Categorias from "./componentes/Inicio/Categorias";
import Producto from "./componentes/Producto/Producto";
import Editor from "./componentes/Editor/Editor";
import './custom.scss';
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// <Producto/>
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/oferta' exact component={Ofertas} />
          <Route path='/editor' component={Editor} />
          
          <Route path='/producto/:id' component={Producto} />
        </Switch>

      </div>
    </Router>
  );
}
const Home = () => {
  return (
    <div>
      
      <Categorias/>
    </div>
  )
}
export default App;
