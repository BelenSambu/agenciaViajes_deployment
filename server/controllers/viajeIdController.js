const Viaje = require('../models/Viajes');
exports.consultaIdViaje = async (req, res) => {
    const viaje = await Viaje.findByPk(req.params.id)
    res.render('viaje', {
        viaje
    })
    //res.send es para imprimir texto
    // res.send(req.params.id);
}