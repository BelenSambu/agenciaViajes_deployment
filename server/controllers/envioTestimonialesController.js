const Testimonial = require('../models/Testimoniales');
exports.envioTestimoniales = async (req, res) => {
    //Validar que todos los campos estén llenos
    let {nombre, correo, mensaje} = req.body;

    let errores = [];
    if(!nombre){
        errores.push({'mensaje': 'Agrega tu Nombre'});
    }
    if(!correo){
        errores.push({'mensaje': 'Agrega tu Correo'});
    }
    if(!mensaje){
        errores.push({'mensaje': 'Agrega tu Mensaje'});
    }
    //Revisa errores
    if(errores.length > 0){
        //Mostrar errores
      const testimoniales = await  Testimonial.findAll()
      res.render('testimoniales', {
        //Le paso las variables
        errores,
        nombre,
        correo,
        mensaje,
        pagina: 'Testimoniales',
        testimoniales
    })
          
    } else {
        //Guardar en base de 
        //Testimonial es la constante que se encuentra arriba de todo, que llama al modelo donde se encuentran los datos de la BD
        Testimonial.create({
            nombre,
            correo,
            mensaje
        })
        .then(testimonial => res.redirect('/testimoniales'))
        .catch(error => console.log(error))
    }
}