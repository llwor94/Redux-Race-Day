const express = require('express');
const router = express.Router();
const db = require('../data/dbConfig');

router.get('/', (req, res, next) => {
  db('ageGroups')
    .leftJoin('racers', 'ageGroups.id', 'racers.ageGroup')
    .select(
      'ageGroups.id',
      'ageGroups.name',
      db.raw('count(racers.name) as racers'),
      db.raw('sum(racers.checkedIn) as checkedIn'),
    )
    .groupBy('ageGroups.id')

    .then(groups => {
      res.status(200).json(groups);
    })
    .catch(err => next(err));
});

module.exports = router;
