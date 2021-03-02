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
            <label className="title_label" style={{marginRight: "20px"}}>
                <text>Nombre del producto:</text>
                <input type="text" name="name" maxLength={50} className="title_input"/>
            </label>
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
        <div className="grid_row" style={{marginTop: "100px"}}>
          <div>
            <label className="price_label">
              <text>Precio del producto (Q):</text>
              <input type="text" style={{marginRight:"10px"}} name="name" maxLength={50} className="number_input" value={this.state.value1} onChange={this.onChange1}/>
              <text>Cantidad en existencia:</text>
              <input type="text" style={{marginRight:"10px"}} name="name" maxLength={50} className="number_input" value={this.state.value2} onChange={this.onChange2}/>
              <text>% de Descuento:</text>
              <input type="text" name="porcentage_general" maxLength={50} />
            </label>
          </div>
        </div>
        <div className="grid_row_p" style={{marginTop: "200px", gridAutoFlow: "row"}}>
          <text>Descripcion del producto</text>
          <textarea className="description" type="text" name="name" maxLength={500}/>
        </div>
        <div className="grid_row" style={{marginTop: "800px", left: "26%", gap: "10rem"}}>
            <button className='guardar_button' type="button">Guardar Cambios</button>
            <button className='eliminar_button' type="button">Eliminar Publicacion</button>
        </div>
      </div>
    );
  }
}

export default Editor;