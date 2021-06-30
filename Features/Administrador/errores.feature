Feature: Edición de productos de la página

Rules:
- El cambio se realizará desde la página
- Se necesita una cuenta de administrador

Scenario: Al ingresar un nuevo producto se ingresa la cantidad equivocada del mismo.
	Given el encargado de redes sociales ingresará a la página para realizar el cambio.
	When encuentre el producto con el error.
	Then lo seleccionará para poder realizar los cambios necesarios para que muestre la información correcta.