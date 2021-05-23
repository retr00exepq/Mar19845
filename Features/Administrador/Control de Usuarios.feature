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
