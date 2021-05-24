Feature: Organización y administración de los productos de la BODEGA502

Como encargada de ventas, se tiene la responsabiidad de:
-  Tener el 100% del inventario de la bodega
-  Poder acceder a cada producto facilmente a partir de la página

Rules:
-  El encargado de ventas necesita ver la existencia real de cada producto.
-  Dos clientes no pueden comprar el MISMO producto si solo hay 1 existencia.

Examples:
-  Dos clientes ingresan a la página en diferentes horas del dia, y compran una lampara roja que tenia solo una existencia.
	-  El dia del pago, solo uno de ellos recibe la lampara, debido a la confusión de la existencia de la lampara(No se actualizo esta).
	
-  El encargado de ventas ofrece un producto ya comprado a un cliente por error, debido a la falta de descripción de este en la página

Scenario: Dos clientes ingresan a la pagina y buscan un juego de sofas
	Given: El catalogo les muestra el mismo juego de sofas con existencia de 2
	When: Los clientes quieren encargar el inmueble
	Then: Uno de ellos se queda sin poder encargarlo debido a un error
	And: Llama a la bodega debido al error de la página
	And: La encargada le menciona que solo habia 1 juego de sofas
	And: Por lo que se pierde un cliente debido a la desinformación de la página
	
Scenario: El encargado de ventas necesita tener un inventario rapido de la bodega 502
	Given: El encargado de ventas se dirige al catologo de la página
	When: Dentro del catalogo, ingresa a cada producto para ver su exitencia
	Then: Al comparar la exitencia de productos de la bodega con respecto a la pagina
	And: Se da cuenta que concuerda, por lo que entrega el inventario 100% veridico de la pagina y bodega.