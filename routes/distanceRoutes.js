const express = require('express');
const router = express.Router();
const db = require('../data/helpers/distanceDb');

router.get('/', (req, res, next) => {
  db.getDistances()
    .then(distances => {
      res.status(200).json(distances);
    })
    .catch(err => next(err));
});

module.exports = router;
