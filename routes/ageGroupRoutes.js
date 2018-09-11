const express = require('express');
const router = express.Router();
const db = require('../data/helpers/ageDb');

router.get('/', (req, res, next) => {
  db.getAgeGroups()
    .then(groups => {
      res.status(200).json(groups);
    })
    .catch(err => next(err));
});

module.exports = router;
