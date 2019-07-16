//Neode es un OGM (Object Graph Mapper) para node.js
// Aquí se realiza la conexión a la base de datos
const Neode = require('neode');
//
// Exportar la instancia de la sesion de neo4j para usarla en otros lados (controladores)
module.exports =  
    new Neode('bolt://localhost:7687', 'neo4j', '123')
        .withDirectory(__dirname + '/models');
