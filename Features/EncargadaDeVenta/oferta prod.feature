
Feature: Ofertas en productos

Rules:
- Los productos deben tener una razon para no vernderse
- El precio que se mostrara sera el precio con descuento

Scenario: Uno de los prodcutos de la página fue dañado en la bodega por algún accidente.
	Given los encargados determinan que el precio del mismo producto ya no es el mismo debido al daño que recibió
	When el producto reciba su descuento
	Then será presentado en la sección de descuento con una explicación del daño