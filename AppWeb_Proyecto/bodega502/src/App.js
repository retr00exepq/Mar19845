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
// <Producto/>
function App() {
  return (
    <div className="App">
      <Editor/>
    </div>
  );
}

export default App;
