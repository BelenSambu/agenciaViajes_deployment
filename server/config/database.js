//conexion para base de datos
const Sequelize = require('sequelize');
//Para las variables creadas en variables.env
require('dotenv').config( { path: 'variables.env'})
//agenciadeviajes es la base de datos creada, después user y password por defecto en wamp
//Configuración de sequelize
//Port es la de mysql
console.log(process.env.BD_PORT)

module.exports = new Sequelize(process.env.BD_NOMBRE, process.env.BD_USER,'', {
    host: process.env.BD_HOST,
    port: process.env.BD_PORT,
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
})