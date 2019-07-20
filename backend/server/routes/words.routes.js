const express = require('express'); //no para crear el servidor sino sus rutas
const router = express.Router(); //se le agregan propiedades (rutas)

const wordCtrl = require('../controllers/word.controller');

// Se utilizan las rutas para enviar y recibir datos en formato JSON (REST API)
router.get('/', wordCtrl.getWords);
router.get('/:lema', wordCtrl.getWord); 
router.post('/', wordCtrl.createWord);
router.put('/:lema', wordCtrl.editWord); // parametro id para identificar lo que se quiere obtener especificamente. Con put se actualiza
router.delete('/:lema', wordCtrl.deleteWord);
router.get('/resultados/:lema', wordCtrl.searchWord)
router.get('/neo4/j', wordCtrl.neo4);

module.exports = router;