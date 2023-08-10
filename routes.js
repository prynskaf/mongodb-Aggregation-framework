// routes.js

const express = require('express');
const router = express.Router();
const queryController = require('./queryController');

router.get('/users', async (req, res) => {
  const users = await queryController.getUsersWithEmailStartingWithJohnDoe();
  res.json(users);
});

router.get('/stats/:year', async (req, res) => {
  const year = parseInt(req.params.year);
  const stats = await queryController.getPostStatsForYear(year);
  res.json(stats);
});

module.exports = router;
