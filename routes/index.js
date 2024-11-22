const express = require('express');
const afiliadoRoutes = require('./afiliado');
const productoRoutes = require('./producto');
const ventaRoutes = require('./venta');
const despachoRoutes = require('./despacho');

const router = express.Router();

router.use('/afiliados', afiliadoRoutes);
router.use('/productos', productoRoutes);
router.use('/ventas', ventaRoutes);
router.use('/despachos', despachoRoutes);

module.exports = router;
