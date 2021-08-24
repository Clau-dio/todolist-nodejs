require('colors');
const { guardaDB, leerDB } = require('./helpers/manipularDB');
const { inquirerMenu, pausa, leerInput, listadoTareasBorrar, mostrarListadoCheckList, confirmar } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');


console.clear();

const main = async () => {

    let opt = '';
    const tareas = new Tareas ();

    const tareasDB = leerDB();

    if( tareasDB ) {
        tareas.cargarTareasFromArray(tareasDB);
    }

    do {
        // Imprimir el menu
        opt = await inquirerMenu();

        switch (opt) {

            // Crear tarea
            case '1':    
                const desc = await leerInput('Descripción:');
                tareas.crearTarea(desc);
                break;

            // Listar tareas
            case '2':
                tareas.listadoCompleto();
                break;

            // Listar tareas completas
            case '3':
                tareas.listarPendientesCompletadas();
                break;

            // listar tareas pendientes
            case '4':
                tareas.listarPendientesCompletadas(false);
                break;

            // Completar tarea(s)
            case '5':
                const answers = await mostrarListadoCheckList(tareas.listadoArr);
                tareas.toggleCompletadas(answers);
                break;

            // Borrar tarea
            case '6':
                const id = await listadoTareasBorrar(tareas.listadoArr);
                if( id !== '0'){
                    const ok = await confirmar('¿Estás seguro?');
                    if( ok ) {
                        tareas.borrarTarea(id);
                        console.log('Tarea borrada'.green);
                    }
                }
                break;
        }

        guardaDB(tareas.listadoArr);

        await pausa();

    } while ( opt !== '0');

}

main();