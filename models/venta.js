const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Venta = sequelize.define('Venta', {
  id_venta: { type: DataTypes.INTEGER, primaryKey: true },
  valor_venta: { type: DataTypes.FLOAT },
  fecha_venta: { type: DataTypes.DATE },
  afiliado_ced_afiliado: { type: DataTypes.INTEGER },
  despacho_id_despacho: { type: DataTypes.INTEGER },
}, { tableName: 'VENTA', timestamps: false });

module.exports = Venta;
