const express = require('express');
const { route } = require('./movies.js');

const router = express.Router();
router.use('/movies', route);

module.exports = { router };