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
		| Mesa Rota |  Sin Categoria  |

		|   *Crear Nueva Categoria*   |
		|   Nombre: Muebles Dañados   | 

		| Producto  |    Categoria    |
		| Mesa Rota | Muebles Dañados |