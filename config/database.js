const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database_name', 'username', 'password', {
    host: 'localhost', // Cambia al host de tu base de datos
    port: 1521, // Cambia al puerto que usa Oracle
    dialect: 'oracle', // Dialecto para Oracle
    dialectOptions: {
        connectString: 'localhost/xe' // Cambia según el connect string de tu base de datos
    }
});

module.exports = sequelize;
