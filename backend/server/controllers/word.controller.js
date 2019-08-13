// En el controlador se definen métodos de un objeto que se van a usar en las rutas
// Estas funciones se utilizan para hacer las consultas a la base de datos
const instance = require('../database');
const NeoVis = require('neovis.js');
const Neo4j = require('neo4j-driver').v1;
const path = require('path');

const wordCtrl = {};

wordCtrl.getWords = (req, res) => {
    instance.all('Lema')
    .then(results => {        
        results.toJson()
        .then(rec => {
            res.json(rec) // enviar los datos en formato JSON
        })
        .catch(err => {
            res.json({
                'status' : "Hubo un problema al cargar las palabras"
            });
            console.log(err);
            
        });
    })
};


wordCtrl.getWord = (req, res) => {   
    
    instance.all('Lema', {lema : req.params.lema}) // con params.lema se obtiene el sufijo de la url /:lema (el valor de la propiedad "lema")
    .then(results => {
        results.toJson()
        .then(rec => {
            res.json(rec)
        })
        .catch(err => {
            res.json({
                'status' : "Hubo un problema al cargar la palabra"
            });
            console.log(err);
        });
    })
};


wordCtrl.createWord = (req, res) => {
    instance.create('Lema', req.body) // request al cliente (navegador); req.body recibe el post del postman
    .then( newWord => {           
        res.json({
            'status' : "Palabra añadida"
        }); // la respuesta que se le envia a postman
    })
    .catch(err => {
        res.json({
            'status' : "Error al crear la palabra. Compruebe que ha completado los campos correctamente"
        });
        console.log(err);
        
    }); 
}; //TODO: cuando se creen variantes definir las propiedades de :ES como {es : 'Variante'} en lugar de es:'Sinonimo'

wordCtrl.editWord = (req, res) => {
    instance.findById('Lema', req.body._id)
    .then(results => {
        console.log(results);
        
        results.update({
            idLema : req.body.idLema,
            lema : req.body.lema
        }).then(e => {
            res.json({
                'status' : "Palabra actualizada"
            });
        })
        .catch(err => {
            res.json({
                'status' : "Error al editar la palabra. Compruebe que ha completado los campos correctamente"
            });
            console.log(err);
        });
    })
};


wordCtrl.deleteWord = (req, res) => {
    instance.first('Lema', {lema : req.params.lema, idLema : req.body.idLema})
    .then(results => results.delete())
    .then(results => { 
        res.json({
            'status' : "Palabra eliminada"
        });     
    })
    .catch(err => {
        res.json({
            'status' : "Error al eliminar la palabra"
        });
        console.log(err);
    });
};

wordCtrl.searchWord = (req, res) => {
    
    instance.cypher("MATCH p=(n :Lema)-[]-(m) WHERE n.lema =~ "
    + "'(?i)" + req.params.lema
    + ".*' RETURN DISTINCT labels(n) as labelLema,n as lema,COLLECT([relationships(p),m]) as relacion"
    + ",COLLECT(DISTINCT [(n:Lema)-[:TIENE]->(:Definicion)<-[:TIENE]-(x:Lema) "
    + "WHERE x <> n AND NOT x:Variante AND NOT x:Expresion | x]) as sinonimos"
    + ",COLLECT(DISTINCT [(n:Lema)-[:TIENE]->(j:Definicion)<-[:TIENE]-(x:Lema)"
    + "WHERE x <> n AND NOT x:Variante AND NOT x:Expresion | j]) as definiciones")
    .then(results => {
        var resultsArr = [];
        results.records.forEach(record => {
            
            var expresionesArr = [];
            var variantesArr = [];
            
            var definicionesArr = {};
            definicionesArr['definiciones'] = [];
            definicionesArr['marcaGramatical'] = [];
            definicionesArr['marcaRegional'] = [];
            definicionesArr['marcaUso'] = [];
            definicionesArr['ejemplo'] = [];
            definicionesArr['fuenteEjemplo'] = [];
            
            var sinonimosArr = [];
            var definSinonArr = [];
            
            record._fields[2].forEach(node => {
                var relacion = node[0][0].properties;
                
                var tipoRelacion = relacion['tiene'] || relacion['es']; 
                
                if (tipoRelacion == 'Expresion') expresionesArr.push(node[1].properties.lema);           
                if (tipoRelacion == 'Variante') variantesArr.push(node[1].properties.lema);
                if (tipoRelacion == 'Definicion') {
                    definicionesArr['definiciones'].push(node[1].properties.enunciadoDef);
                    definicionesArr['marcaGramatical'].push(relacion['marcaGramatical'] || undefined);
                    definicionesArr['marcaRegional'].push(relacion['marcaRegional'] || undefined);
                    definicionesArr['marcaUso'].push(relacion['marcaUso'] || undefined);
                    definicionesArr['ejemplo'].push(relacion['ejemplo'] || undefined);
                    definicionesArr['fuenteEjemplo'].push(relacion['fuenteEjemplo'] || undefined);
                } //usar esta para marcas y ejemplos
                
                
            });
            
            if (definicionesArr['definiciones'].length == 0) definicionesArr['definiciones'] = ['Véase ' + variantesArr];
            
            record._fields[3].forEach(nodes => {
                sinonimosArr = nodes.map(node => {
                    return node.properties.lema;
                });
            });
            
            record._fields[4].forEach(nodes => {
                definSinonArr = nodes.map(node => {
                    return node.properties.enunciadoDef;
                });
            });
            
            for (i=0; i < sinonimosArr.length; i++) {
                sinonimosArr[i] = [sinonimosArr[i], definSinonArr[i]];                
            }
            
            resultsArr.push({
                _id : record._fields[1].identity.low,
                idLema : record._fields[1].properties.idLema['low'],
                lema : record._fields[1].properties.lema,
                expresiones : record._fields[0].includes('Expresion') || expresionesArr.length == 0 ? undefined : expresionesArr,
                expresionDe : record._fields[0].includes('Expresion') ? expresionesArr : undefined,
                varianteDe : variantesArr.length > 0 ? variantesArr : undefined,
                definiciones : definicionesArr,
                sinonimos : sinonimosArr.length > 0 ? sinonimosArr : undefined //TODO: sinonimos deben ir asociados a la definición (no solo al lema). Usar queries según el camino?
                
            });
        });
        
        res.send(resultsArr);
        
    })
    .catch(err => {
        res.json({
            'status' : "Hubo un problema al buscar la palabra"
        });
        console.log(err);
    });
    
}

wordCtrl.neo4 = (req, res) => {    

    const config = {
        encrypted: "ENCRYPTION_ON",
        container_id: "viz",
    
        labels: {
            "Lema": {
                caption: "lema",
                community: (node) => node.properties.lema.toLowerCase().startsWith(req.params.lema.toLowerCase()) ? 1 : 0
            },
            "Definicion": {
              caption: (node) => node.properties.enunciadoDef.split(/((?:\w+ ){3})/g).filter(Boolean).join("\n"), //</br> cuando se use la forma alternativa
              community : 'idDef',
              size : 0
          }
        },
        relationships: {
            "TIENE": {
                caption: ['marcaRegional','marcaUso'],
                thickness: '0.2'
            },
            "ES": {
              caption: false,
              thickness: 'es'
          }
        },
        initial_cypher: req.query.initial_cypher
      };

    const neovis = new NeoVis.default(
        config,
        Neo4j,
        'bolt://hobby-hjjfgenlakdagbkeidbgijdl.dbs.graphenedb.com:24787',
        'coltest',
        'b.lTeC6LXhZkGp.XogYXwRqindRVqXX'
        )

    neovis.render(res); 
    
};

wordCtrl.redirect = (req, res) => {
    res.status(200)
        .sendFile(path.join(__dirname, '../../../public/index.html'));
}

module.exports = wordCtrl;