// En el controlador se definen métodos de un objeto que se van a usar en las rutas
// Estas funciones se utilizan para hacer las consultas a la base de datos
const instance = require('../database');
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
            //console.log(e.properties());
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
        + ".*' RETURN DISTINCT labels(n) as labelLema,n as lema,COLLECT([relationships(p),m]) as relacion")
    .then(results => {
        var resultsArr = [];
        results.records.forEach(record => {

            var expresionesArr = [];
            var variantesArr = [];
            var definicionesArr = [];
            var sinonimosArr = [];

            record._fields[2].forEach(node => {
                var relacion = node[0][0].properties;
                var tipoRelacion = relacion[Object.keys(relacion)[0]]; 

                if (tipoRelacion == 'Expresion') expresionesArr.push(node[1].properties.lema);           
                if (tipoRelacion == 'Variante') variantesArr.push(node[1].properties.lema);
                if (tipoRelacion == 'Definicion') definicionesArr.push(node[1].properties.enunciadoDef);
                if (tipoRelacion == 'Sinonimo') sinonimosArr.push(node[1].properties.lema);
                
            })           

            resultsArr.push({
                _id : record._fields[1].identity.low,
                idLema : record._fields[1].properties.idLema['low'],
                lema : record._fields[1].properties.lema,
                expresiones : record._fields[0].includes('Expresion') || expresionesArr.length == 0 ? undefined : expresionesArr,
                expresionDe : record._fields[0].includes('Expresion') ? expresionesArr : undefined,
                varianteDe : variantesArr.length > 0 ? variantesArr : undefined,
                definiciones : definicionesArr.length > 0 ? definicionesArr : ['Véase ' + variantesArr],
                sinonimos : sinonimosArr.length > 0 ? sinonimosArr : undefined //TODO: sinonimos deben ir asociados a la definición (no solo al lema). Usar queries según el camino?

            })
        })
        res.send(resultsArr);
        
    })
    .catch(err => {
        res.json({
            'status' : "Hubo un problema al buscar la palabra"
        });
        console.log(err);
    });
    
}


module.exports = wordCtrl;