const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Producto = sequelize.define('Producto', {
  id_producto: { type: DataTypes.INTEGER, primaryKey: true },
  nombre_producto: { type: DataTypes.STRING },
  stock: { type: DataTypes.INTEGER },
  precio: { type: DataTypes.FLOAT },
  descripcion: { type: DataTypes.STRING },
  categoria_id_categoria: { type: DataTypes.INTEGER },
}, { tableName: 'PRODUCTO', timestamps: false });

module.exports = Producto;
