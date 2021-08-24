const Tarea = require("./tarea");

class Tareas {
    
    _listado = {}; // no es necesario. lo ponemos por comodidad

    constructor(){
        this._listado = {};
    }


    /**
     * Función de acceso a la propiedad del objeto
     * la propiedad se debe declarar con guión bajo _
     * 
     * devuelve un array con las tareas creadas
     */
    get listadoArr (){

        const listado = [];

        /* Obtenemos un array con las llaves del objeto (Object.keys(object)) */
        /* Con forEach lo recorremos */
        Object.keys(this._listado).forEach( key => {
            const tarea = this._listado[key]; // encontramos la tarea
            listado.push( tarea ); // ingresamos la tarea al arreglo
        } )

        return listado;
    }

    /**
     * Crea una tarea
     * 
     * @param {*} desc 
     */
    crearTarea ( desc = '' ){
        const tarea = new Tarea(desc);

        this._listado[tarea.id] = tarea;
    }

    /**
     * Tarea quese desea borrar
     * 
     * @param {*} id 
     */
    borrarTarea( id= '' ) {
        if( this._listado[id] ) {
            delete this._listado[id]; // borrar del objeto listado
        }
    }

    /**
     * Cargamos las tareas desde un array al objeto _listado
     * 
     * @param {*} tareas 
     */
    cargarTareasFromArray( tareas = [] ){
        tareas.forEach(tarea =>{
            this._listado[tarea.id] = tarea;
        });
    }

    /**
     * Imprimir una tarea
     * 
     * @param {*} index 
     * @param {*} tarea 
     */
    printTarea(index, tarea) {
        const idx =`${index + 1}.`.green;
        const { desc, completadoEn } = tarea;
        const estado = (completadoEn) 
                            ? `${completadoEn}`.green
                            : 'Pendiente'.red;
        const salida = `${idx} ${desc} :: ${estado}`;
        console.log(salida);
    }

    /**
     * Muestra el listado completo de las tareas
     */
    listadoCompleto() {
        /* Obtiene las llaves del objeto y lo recorre */
        Object.keys(this._listado).forEach( (key,index) => {
            this.printTarea(index, this._listado[key]);
        });
    }

    /**
     * Muestra las tareas completadas o pendientes, segun se especifique en los parametros
     * 
     * true -> completadas
     * false -> pendientes
     * 
     * @param {Boolean} completadas 
     */
    listarPendientesCompletadas(completadas = true) {

        Object.keys(this._listado).forEach( (key,index) => {

            const { completadoEn } = this._listado[key];

            if(completadas){
                // mostrar completadas
                if(completadoEn){
                    this.printTarea(index, this._listado[key]);
                }

            }else{
                // mostrar pendientes
                if(!completadoEn){
                    this.printTarea(index, this._listado[key]);
                }

            }

        });
    }

    toggleCompletadas ( ids = []){
        ids.forEach( id => {
            const tarea = this._listado[id];

            if( !tarea.completadoEn ) {
                tarea.completadoEn = new Date().toISOString();
            }
        });

        this.listadoArr.forEach( tarea => {
            if ( !ids.includes(tarea.id) ){
                this._listado[tarea.id].completadoEn = null;
            }
        });
    }

}

module.exports = Tareas;