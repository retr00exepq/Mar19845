import React, { Component } from "react";
import Select from 'react-select';
import "./Editor_style.css";

const options = [
  { value: 'mueble', label: 'Mueble' },
  { value: 'interiores', label: 'Interiores' },
  { value: 'Jardineria', label: 'Jardineria' },
];

class Editor extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  state = { 
    value1: "",
    value2: "",
    selectedOption: null,
 };

  onChange1 = event => {
    this.setState({ value1: event.target.value.replace(/[^0-9 ]/g, "") });
  };

  onChange2 = event => {
    this.setState({ value2: event.target.value.replace(/[^0-9 ]/g, "") });
  };

  render() {
    return (
      <div className="main_div">
        <div className="grid_row">
          <div>
              <text>Nombre del producto:</text>
              <input type="text" name="name" maxLength={50} className="title_input"/>
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
        <div className="grid_row" style={{marginTop: "100px", height: "250px"}}>
          <div className="grid_column">
              <text>Precio del producto (Q):</text>
              <input type="text" name="name" maxLength={50} className="number_input" value={this.state.value1} onChange={this.onChange1}/>
              <text>Cantidad en existencia:</text>
              <input type="text" name="name" maxLength={50} className="number_input" value={this.state.value2} onChange={this.onChange2}/>
          </div>
          <div className="grid_column">
              <text>% de descuento con tarjeta:</text>
              <input type="text" name="name" maxLength={50} className="number_input" value={this.state.value1} onChange={this.onChange1}/>
              <text>Nuevo precio:</text>    
              <text>0</text>    
          </div>
          <div className="grid_column">
              <text>% de descuento por cuotas:</text>
              <input type="text" name="name" maxLength={50} className="number_input" value={this.state.value1} onChange={this.onChange1}/>
              <text>Nuevo precio:</text>    
              <text>0</text>    
          </div>
        </div>
        <div className="grid_row_p" style={{marginTop: "400px", gridAutoFlow: "row"}}>
          <text>Descripcion del producto</text>
          <textarea className="description" type="text" name="name" maxLength={500}/>
        </div>
        <div className="grid_row" style={{marginTop: "1000px", left: "26%", gap: "10rem"}}>
            <button className='guardar_button' type="button">Guardar Cambios</button>
            <button className='eliminar_button' type="button">Eliminar Publicacion</button>
        </div>
      </div>
    );
  }
}

export default Editor;