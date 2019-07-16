// Código del servidor

const express = require('express');
const morgan = require('morgan'); //para ver por consola lo que el usuario pide
const app = express(); //app contiene toda la funcionalidad del servidor
//const instance = require('./database'); //traer la sesión de neo4j desde database.js
const cors = require('cors');

// Configuración del servidor

// se crea la variable port para ser utilizada en otros lugares de la app
// process.env.PORT para obtener el puerto dado por el sistema operativo (para despliegue de la app)
app.set('port', process.env.PORT || 3000);

// Middlewares (Procesamiento de datos)
app.use(morgan('dev'));
app.use(express.json()); //para que el servidor entienda los datos en formato json que vienen del navegador
app.use(cors({origin : 'http://localhost:4200'})); // definir que servidores externos se pueden comunicar con este
// Rutas
app.use('/api/entradas', require('./routes/words.routes')); // /prefijo/otroPrefijo/ se agrega antes del path que se le está pasando desde las rutas

// Inicializar el servidor
app.listen(app.get('port'), () => {
    console.log('Servidor en puerto',app.get('port'));
    
});