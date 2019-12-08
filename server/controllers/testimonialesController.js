const Testimonial = require('../models/Testimoniales');
exports.consultaTestimoniales = async (req, res) => {
    const testimoniales = await Testimonial.findAll()
    res.render('testimoniales', {
        pagina: 'Testimoniales',
        testimoniales
    })
}