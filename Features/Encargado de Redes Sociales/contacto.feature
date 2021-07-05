Feature: Página de contacto con la bodega

Rules:
- El cliente debe tener algun medio de comunicacion para responderle
- El encargado debe responer a las preguntas

Scenario:  Un usuario tiene una duda sobre como funciona la bodega para poner un pedido.
	Given el usuario buscará un número de teléfono o un correo en la página.
	When  el usuario utiliza uno de los medios para comunicarse con la bodega
	Then el usuario recibirá una respuesta por medio de alguno de los medios de comunicación de la bodega.
