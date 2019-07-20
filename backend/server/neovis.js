// const NeoVis = require('neovis.js');
// const driver = require('./neo4j');

// const config = {
//     encrypted: "ENCRYPTION_ON",
//     container_id: "viz",

//     labels: {
//         "Lema": {
//             caption: "lema",
//             community: 0
//         },
//         "Definicion": {
//           caption: (node) => node.properties.enunciadoDef.split(/((?:\w+ ){5})/g).filter(Boolean).join("\n"),
//           community : "idDef"
//       }
//     },
//     relationships: {
//         "TIENE": {
//             caption: false,
//             thickness: 'tiene'
//         },
//         "ES": {
//           caption: false,
//           thickness: 'es'
//       }
//     },
//     initial_cypher: "MATCH (n :Lema) WITH n MATCH (m:Lema)-[r]-(o:Lema) RETURN *"
//   };

// module.exports = new NeoVis.default(config, driver);

