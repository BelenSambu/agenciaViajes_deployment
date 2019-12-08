const Viaje = require('../models/Viajes');
//Modo Async await
exports.consultaViajes = async (req, res) => {
    //findAll() es el método de Sequelize para consulta de datos en DB. Retorna un promise.
    //Viaje es el modelo donde tiene los datos de la BASE DE DATOS
    const viajes = await Viaje.findAll()
        //Pasa los viajes a la vista viajes
        res.render('viajes', {
            //La variable pagina sólo la podrá usar el template de /viajes index.pug
            pagina: 'Próximos Viajes',
            //con la palabra reservada viajes, se llamada dsde el index del layout
            viajes 
        });
}