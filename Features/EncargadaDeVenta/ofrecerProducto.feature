Feature: Ofrecer Productos

La encargada de ventas puede ofrecer productos:
-  Mediante la página de Facebook
-  Mediante la página a desarrollar

Rules:
-  El cliente debe de poder ver los productos disponibles.
-  El cliente necesita saber la existencia real de cada producto para poder realizar una compra.
-  La encargada de ventas debe de poder enseñarle los productos a los clientes.

Examples: 
-  Un cliente interesado habla con el encargado de ventas para confirmar la existencia del producto que vio en la pagina
-  El encargado de ventas ofrece productos tomando como referencia el catalogo de la página web.

Scenario: Confirmación de exitencia de un producto
	Given: Un cliente encuentra un producto con unica existencia en la pagína web.
	When: El cliente se comunica con la encargada de ventas para confirmar la existencia
	Then: La encargada de ventas revisa en la bodega si es veridica la información
	And: Confirma o no la existencia
	
Sceneraio: Cliente buscan una silla roja
	Given: Un cliente pregunta mediante Facebook la exitencia de una silla roja
	And: No encuentra debido a la cantidad de publicaciones
	And: Por lo tanto pregunta a la encargada de ventas
	When: El cliente le pregunta a la encargada de ventas acerca de la exitencia de la silla roja
	Then: La encargada de ventas le referencia el catalogo de la página web, donde existe un orden
	And: El cliente puede o no encontrar la silla de una manera sencilla