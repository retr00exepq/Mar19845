Feature: Categoria de Ofertas

Rules:
- Cualquier producto puede tener una oferta.
- Varios productos pueden tener ofertas.
- Las ofertas tendran su propio apartado.

Scenario: Para poder llamar la atencion de los clientes, se podria crear una seccion de ofertas.
	Given El encargado de redes va a ser un calculo de cual seria el porcentaje de descuento adecuado
	When El encargado de redes colocara el producto con el porcentaje de descuento en la seccion de ofertas.
	Then Este llamara la atencion de los clientes

	Examples:
		|                      Seccion de productos con descuento                 |
		|-------------------------------------------------------------------------|
		| Producto  |    Categoria    | Precio | % de Descuento | Precio a vender |
		| Mesa Rota | Muebles Dañados |  Q100  |       50       |       Q50       |