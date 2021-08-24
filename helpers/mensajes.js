require('colors');

/**
 * Manera tradicional de leer datos desde el teclado con readline
 * 
 * @returns (opcion seleccionada)
 */

const mostrarMenu = () => {
    return new Promise((resolve) => {
        console.clear();
        console.log('=========================='.green);
        console.log('   Seleccione una opción  '.green);
        console.log('==========================\n'. green);
    
        console.log(`${'1.'.green} Crear tarea`);
        console.log(`${'2.'.green} Listar tareas`);
        console.log(`${'3.'.green} Listar tareas completadas`);
        console.log(`${'4.'.green} Listar tareas pendientes`);
        console.log(`${'5.'.green} Completar tarea(s)`);
        console.log(`${'6.'.green} Borrar tarea`);
        console.log(`${'0.'.green} Salir\n`);
    
        /* Preparamos la interfaz para leer desde consola */
        const readline = require('readline').createInterface({
            input: process.stdin, //Input para leer el dato
            output: process.stdout //Mostrar el mensaje para leer la información
        });

        /* Hacemos la pregunta al usuario con el callback que nos devuelve la opcion seleccionada */
        readline.question('Seleccione una opción: ', (opt) => {
            // console.log({opt});
            readline.close();
            resolve(opt); // capturamos la opcion y resolvemos la promesa
        })
    });
}

/**
 * Pausa hasta que se seleccione una opcion
 * 
 * @returns void
 */
const pausa = () => {
    return new Promise((resolve) => {
        /* Preparamos la interfaz para leer desde consola */
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        /* Hacemos la pregunta al usuario con el callback que nos devuelve la opcion seleccionada */
        readline.question(`\nPresione ${'ENTER'.green} para continuar`, (opt) => {
            readline.close();
            resolve();
        })
    });
}


module.exports = {
    mostrarMenu,
    pausa
}