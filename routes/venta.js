const express = require('express');
const { Venta } = require('../models');
const router = express.Router();

router.get('/', async (req, res) => {
  const ventas = await Venta.findAll();
  res.json(ventas);
});

router.post('/', async (req, res) => {
  const venta = await Venta.create(req.body);
  res.json(venta);
});

router.put('/:id', async (req, res) => {
  await Venta.update(req.body, { where: { id_venta: req.params.id } });
  res.sendStatus(204);
});

router.delete('/:id', async (req, res) => {
  await Venta.destroy({ where: { id_venta: req.params.id } });
  res.sendStatus(204);
});

module.exports = router;
