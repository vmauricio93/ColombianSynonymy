//Neode es un OGM (Object Graph Mapper) para node.js
// Aquí se realiza la conexión a la base de datos
const Neode = require('neode');

// Exportar la instancia de la sesion de neo4j para usarla en otros lados (controladores)
module.exports =  
    new Neode('bolt://hobby-hjjfgenlakdagbkeidbgijdl.dbs.graphenedb.com:24787', 'coltest', 'b.lTeC6LXhZkGp.XogYXwRqindRVqXX')
        .withDirectory(__dirname + '/models');
