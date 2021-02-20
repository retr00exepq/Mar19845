import './App.css';
import Navbar from './componentes/Navbar';
import Ofertas from "./componentes/Inicio/CaruselOfertas";
import Producto from "./componentes/Producto/Producto";
import './custom.scss';
// <Producto/>
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Ofertas/>
      <div>Hola esto es una prueba</div>
    </div>
  );
}

export default App;
