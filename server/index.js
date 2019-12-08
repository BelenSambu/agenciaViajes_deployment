//Importar express - creando el servidor
const express = require('express');
//Ingresa al file system, a los archivos.
const path = require('path');
const bodyParser = require('body-parser')
const routes = require('./routes');

//Conexión de base de datos
const db = require('./config/database');
//probar la base de datos
db.authenticate()
    .then(() => console.log('DB conectada'))
    .catch(error => console.log(error));
    
//Configurar express
const app = express();

//habilitar pug
app.set('view engine', 'pug');

//Añadir las vistas
app.set('views', path.join(__dirname, './views'));

//Cargar una carpeta estatica llamada public
//método de express para encontrar la carpeta 'public'
app.use(express.static('public'));

//Muestra el año actual
//use se usa en todos los verbos
app.use((req, res, next) => {
    //crear una nueva fecha
    //res.locals son variables internas
    const fecha = new Date();
    res.locals.fechaActual = fecha.getFullYear();
    //Devuelve las rutas que lee el servidor /testimoniales /viajes /nosotros
    res.locals.ruta = req.path;
    // console.log(res.locals);
    return next();
})

//Ejecutamos el bodyParser
app.use(bodyParser.urlencoded({extended: true}));

//cargar las rutas de index.js/routes
app.use('/', routes());

//el 3000 es para el localhost
//luego del deployment heroku nos asigna el host y el puerto

/** puerto y host para la app */
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port, host, () => {
    console.log('El servidor esta funcionando');
});