import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Navbar from './componentes/Navbar';
import Ofertas from "./componentes/Inicio/CaruselOfertas";
import Categorias from "./componentes/Inicio/Categorias";
import Producto from "./componentes/Producto/Producto";
import './custom.scss';
// <Producto/>
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Ofertas/>
      <Categorias/>
      <h1>Producto</h1>
    </div>
  );
}

export default App;
