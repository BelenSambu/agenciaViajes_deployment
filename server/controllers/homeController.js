const Viaje = require('../models/Viajes');
const Testimonial = require('../models/Testimoniales');
exports.consultasHomePage = async (req, res) => {
    
    const viajes = await (Viaje.findAll({
        limit: 3
    }))
    const testimoniales = await (Testimonial.findAll({
        limit: 3
    }))

    //Se pasa en render el nombre de la carpeta donde esta el archivo pug
    res.render('index', {
        pagina : 'Próximos Viajes',
        clase : 'home',
        viajes,
        testimoniales
    })
}