const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Afiliado = sequelize.define('Afiliado', {
  ced_afiliado: { type: DataTypes.INTEGER, primaryKey: true },
  nombre_afiliado: { type: DataTypes.STRING },
  apellido_afiliado: { type: DataTypes.STRING },
  telefono: { type: DataTypes.STRING },
  fecha_afiliacion: { type: DataTypes.DATE },
  nivel_id_nivel: { type: DataTypes.INTEGER },
  estado_afiliado_id_estado: { type: DataTypes.INTEGER },
  afiliado_ced_afiliado: { type: DataTypes.INTEGER },
}, { tableName: 'AFILIADO', timestamps: false });

module.exports = Afiliado;
