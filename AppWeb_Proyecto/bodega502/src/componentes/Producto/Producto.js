/* eslint-disable no-unused-vars */
import './Producto.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import sillon from './sillonPrueba.jpg';

export default function Producto(){
    return(    
    <div id="Producto">
        <img src={sillon} alt="Sillon" className="rounded float-left"></img>
    </div>
    );
}

