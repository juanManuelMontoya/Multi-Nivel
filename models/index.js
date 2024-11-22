const sequelize = require('../config/database');
const Afiliado = require('./afiliado');
const Producto = require('./producto');
const Venta = require('./venta');
const Despacho = require('./despacho');

// Relaciones entre modelos (si es necesario)
// Ejemplo: Venta pertenece a un Afiliado y un Despacho
Venta.belongsTo(Afiliado, { foreignKey: 'afiliado_ced_afiliado' });
Venta.belongsTo(Despacho, { foreignKey: 'despacho_id_despacho' });

module.exports = { sequelize, Afiliado, Producto, Venta, Despacho };
