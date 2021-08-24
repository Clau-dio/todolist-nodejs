# Aplicación de consola interactiva
## todolist-nodejs

Aplicación de consola la cual nos permite administrar una lista de tareas. Estas tareas son persistentes ya que son guardadas en un archivos json con filesystem

Se puede:

 - Crear tareas
 - Borrar tareas
 - Marcarlas como pendientes/Completadas
 - Listarlas

**Temas vistos en esta sección**

 1. stdin
 2. stdout
 3. Ciclos
 4. Inquirer (libreria npm)
 5. Clases en JavaScript
 6. Archivos Json
 7. Fuertemente async y await
 8. Transformaciones

### Lectura y captura de información desde consola (stdin, stdout, readline)
Para leer desde la consola en nodejs utilizamos 'readline', el cual crea un interface la cual preparará el input para capturar el valor leido y el output para mostrar el mensaje en pantalla que capturará el valor
```
const  leerConsola  = () => {
	return  new  Promise((resolve) => {
		console.clear();
		
		/* Preparamos la interfaz para leer desde consola */
		const  readline  =  require('readline').createInterface({
			input: process.stdin, //Input para leer el dato
			output: process.stdout  //Mostrar el mensaje para leer la información
		});

		/* Hacemos la pregunta al usuario con el callback que nos devuelve la opcion seleccionada */
		readline.question('Seleccione una opción: ', (opt) => {
			// console.log({opt});
			readline.close();
			resolve(opt); // capturamos la opcion y resolvemos la promesa
		})
	});
}
```

### Inquirer
Inquirer nos permite crear menús de consola interactivos
