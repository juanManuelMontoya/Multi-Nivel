const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Despacho = sequelize.define('Despacho', {
  id_despacho: { type: DataTypes.INTEGER, primaryKey: true },
  direccion: { type: DataTypes.STRING },
  fecha_despacho: { type: DataTypes.DATE },
  fecha_entrega: { type: DataTypes.DATE },
  estado_despacho_id_despacho: { type: DataTypes.INTEGER },
}, { tableName: 'DESPACHO', timestamps: false });

module.exports = Despacho;
