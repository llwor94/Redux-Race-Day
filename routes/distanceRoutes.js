const express = require('express');
const router = express.Router();
const db = require('../dbConfig.js');

router.get('/', (req, res, next) => {
  db('distances')
    .leftJoin('racers', 'distances.distance', 'racers.distance')
    .select(
      'distances.id',
      'distances.distance',
      'distances.cap',
      db.raw('count(racers.name) as racers'),
      db.raw('sum(racers.checkedIn) as checkedIn'),
    )
    .groupBy('distances.distance')

    .then(distances => {
      res.status(200).json(distances);
    })
    .catch(err => next(err));
});

module.exports = router;
