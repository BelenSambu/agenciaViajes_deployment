const express = require('express');
const router = express.Router();

//Para la base de datos, para extraer los viajes 
const Viaje = require('../models/Viajes');
const Testimonial = require('../models/Testimoniales');

//Controladores
const nosotrosController = require('../controllers/nosotrosController');
const homeController = require('../controllers/homeController');
const viajesController = require('../controllers/viajesController');
const viajeIdController = require('../controllers/viajeIdController');
const testimonialesController = require('../controllers/testimonialesController');
const envioTestimoniales = require('../controllers/envioTestimonialesController');


//module.export para exportar
module.exports = function(){
    router.get('/', homeController.consultasHomePage);
    router.get('/nosotros', nosotrosController.infoNosotros);
    router.get('/viajes', viajesController.consultaViajes);
    router.get('/viajes/:id', viajeIdController.consultaIdViaje);
    router.get('/testimoniales', testimonialesController.consultaTestimoniales);
    //Cuando se llena el formulario y se envia
    router.post('/testimoniales', envioTestimoniales.envioTestimoniales);

    return router;
}
