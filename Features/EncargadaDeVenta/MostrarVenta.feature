Feature: Mostrar ventas

Como encargada de ventas puedo tener acceso a la pagina para:
-  Ofrecer productos que esten o no en oferta
-  Dividir productos en categorías
-  Referenciar la página web para un producto en especifico

Rules: 
-  Mostrar ofertas veridicas
-  Mostrar fechas de expiración de la oferta
-  El encargado de ventas se ve con la necesidad de referenciar la página para mostrar productos.

Examples:
-  Un cliente quiere comprar un adorno de mesa con oferta del Dia de la Madre el 11 de mayo.
	-  Debido a que el anuncio-oferta no estaba bien describida no se le vende a precio de oferta.
	
-  El encargado de ventas le muestra los productos que existen en la página ademas.


Scenario: Un cliente dispone de un Q200 para comprar un producto para el dia del padre
	Given: El cliente al ingresar al catologo, observa que hay ofertas por el dia del padre
	When: Ingresa a la oferta, observa que venden un par de cinchos negros a Q150
	Then: El cliente encarga los dos cinchos pero el total de encargo es de Q300
	And: El cliente se queja con la bodega debido a la desinformación de la oferta.
	
Scenario: Un cliente ingresara a la página para ver ofertas
	Given: El cliente observa varios productos en oferta
	When: Se sigue moviende entre el catalogo y ve los mismos productos que estan en oferta a precio normal
	Then: El cliente queda confundido debido a la duplicidad de los productos