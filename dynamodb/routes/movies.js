const express = require('express');
const { saveMovie, getByYear, updateMovie } = require('../src/controller/movies');

const route = express.Router();
route.post('/', saveMovie);
route.get('/:year', getByYear);
route.put('/:year/:title', updateMovie);

module.exports = { route };