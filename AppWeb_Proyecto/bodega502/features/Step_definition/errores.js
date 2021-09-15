const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

function Errores(producto_id, cambio) {
  if (producto_id === "id"){
    return "El cambio ahora es" + cambio

  }else{
    return "El producto no existe"
  }
}

Given('el encargado de redes sociales ingresará a la página para realizar el cambio.', function () {
  this.producto = ""
});

When('encuentre el producto con el error.', function () {
  this.respuesta = Errores(this.producto_id,this.cambio)
});

Then('lo seleccionará para poder realizar los cambios necesarios para que muestre la información correcta,,{string}', function (respuestaFinal) {
  assert.strictEqual(this.respuesta, respuestaFinal);
});