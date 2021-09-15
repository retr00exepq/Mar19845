const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

function Oferta_Prod(oferta) {
  if (oferta === true){
    return "El producto tiene descuento debido a daño"


  }else{
    return "El producto no tiene descuento"
  }
}

Given('los encargados determinan que el precio del mismo producto ya no es el mismo debido al daño que recibió', function () {
  this.producto = ""
});

When('el producto reciba su descuento', function () {
  this.respuesta = Oferta_Prod(this.oferta)
});

Then('será presentado en la sección de descuento con una explicación del daño,{string}', function (respuestaFinal) {
  assert.strictEqual(this.respuesta, respuestaFinal);
});