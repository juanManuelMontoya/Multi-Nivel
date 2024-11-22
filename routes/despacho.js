const express = require('express');
const { Despacho } = require('../models');
const router = express.Router();

router.get('/', async (req, res) => {
  const despachos = await Despacho.findAll();
  res.json(despachos);
});

router.post('/', async (req, res) => {
  const despacho = await Despacho.create(req.body);
  res.json(despacho);
});

router.put('/:id', async (req, res) => {
  await Despacho.update(req.body, { where: { id_despacho: req.params.id } });
  res.sendStatus(204);
});

router.delete('/:id', async (req, res) => {
  await Despacho.destroy({ where: { id_despacho: req.params.id } });
  res.sendStatus(204);
});

module.exports = router;
