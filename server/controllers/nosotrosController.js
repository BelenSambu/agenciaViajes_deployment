//los controllers conectan los datos con las vistas, Se trae los datos al modelo y le dice a las vistas que mostrar
exports.infoNosotros =  (req, res) => {
    res.render('nosotros', {
        //La variable pagina sólo la podrá usar el template de /nosotros index.pug
        pagina: 'Sobre Nosotros'
    });
}
