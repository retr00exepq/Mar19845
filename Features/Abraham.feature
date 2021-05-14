Feature: Categoria de Productos

Rules:
- Todos los productos deben de pertenecer a una categoria.
- Las categorias tienen especificaciones para ser creadas.
- El encargado podria poner el mismo producto bajo varias categorias.
- Crear una nueva categoria si algun producto aun no tiene una calificacion.

Scenario: El encargado de redes y ventas desean categorizar un mueble con una para rota
	Given el encargado de ventas buscara una categoria para este prodoctu
	When el encargado de ventas se dara cuenta que no existe una categoria para muebles dañados
	Then este creara una nueva categoria para almacenar estos.

	Examples:
		| Producto  |    Categoria    |
		| Mesa Rota | Muebles Dañados | 
--------------------------------------------------------------------------------------------------------------------------------
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
----------------------------------------------------------------------------------------------------------------------------------
Feature: Control de usuarios

Rules:
- La gerente del lugar puede ver que asignacion se le dio a cada trabajador que tenga permiso de usar ciertas partes de la pagina.
- Nadie, excepto que tenga aprobacion de la gerente, puede tener permisos de administrador.
- Un segudno o tercer o cuarto, etc. administrador no puede quitarle el puesto a la gerente.

Scenario: Un trabajador no cumple sus responsabilidades como encargado de mostrar ofertas.
	Given La administradora (gerente) ve que la parte de ofertas no se esta llevando bien a cabo
	When La administradora le revoca los permisos al trabajador
	Then El trabajador sera reemplezado por otro y ya no tiene los permisos.

	Examples:
		|    Nombre del trabajador   |    Area de trabajo   | Revocar permisos |
		| Luis Gonzales Castallenada | Encargado de ofertas |      Si/No       |
