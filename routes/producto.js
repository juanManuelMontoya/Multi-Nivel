const express = require('express');
const { Producto } = require('../models');
const router = express.Router();

router.get('/', async (req, res) => {
  const productos = await Producto.findAll();
  res.json(productos);
});

router.post('/', async (req, res) => {
  const producto = await Producto.create(req.body);
  res.json(producto);
});

router.put('/:id', async (req, res) => {
  await Producto.update(req.body, { where: { id_producto: req.params.id } });
  res.sendStatus(204);
});

router.delete('/:id', async (req, res) => {
  await Producto.destroy({ where: { id_producto: req.params.id } });
  res.sendStatus(204);
});

module.exports = router;
