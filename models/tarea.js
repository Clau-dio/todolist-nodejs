const { v4: uuidv4 } = require('uuid');

class Tarea {
    
    id = '';
    desc = '';
    completadoEn= null;


    constructor( desc ){
        this.id = uuidv4();
        this.desc = desc;
    }

}

//sin llaves para no desectructurar
module.exports = Tarea;