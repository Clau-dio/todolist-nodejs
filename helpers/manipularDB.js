const fs = require('fs');

// Ruta del archivo
const archivo = './db/data.json'; 

const guardaDB = (data) => {
    fs.writeFileSync(archivo, JSON.stringify(data));
}

const leerDB = () => {
    if(!fs.existsSync(archivo)){
        return null;
    }

    const info = fs.readFileSync(archivo, { encoding: 'utf-8' });
    const data = JSON.parse(info);

    return data;
}

module.exports = {
    guardaDB,
    leerDB
}