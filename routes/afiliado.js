const express = require('express');
const { Afiliado } = require('../models');
const router = express.Router();

router.get('/', async (req, res) => {
  const afiliados = await Afiliado.findAll();
  res.json(afiliados);
});

router.post('/', async (req, res) => {
  const afiliado = await Afiliado.create(req.body);
  res.json(afiliado);
});

router.put('/:id', async (req, res) => {
  await Afiliado.update(req.body, { where: { ced_afiliado: req.params.id } });
  res.sendStatus(204);
});

router.delete('/:id', async (req, res) => {
  await Afiliado.destroy({ where: { ced_afiliado: req.params.id } });
  res.sendStatus(204);
});

module.exports = router;
