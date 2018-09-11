const express = require('express');
const router = express.Router();
const db = require('../data/helpers/racerDb');

router.get('/', (req, res, next) => {
  db.getAllRacers()
    .then(racers => {
      res.status(200).json(racers);
    })
    .catch(err => next(err));
});

router.get('/:id', (req, res, next) => {
  db.getRacer(req.params.id)
    .then(row => {
      if (row.length < 1) {
        return next({ code: 404 });
      }
      res.status(200).json(row);
    })
    .catch(err => next(err));
});

router.get('/distance/:id', (req, res, next) => {
  db('racers')
    .leftJoin('distances', 'racers.distance', 'distances.distance')
    .where('distances.distance', req.params.id)
    .select('*')
    .then(racers => {
      if (racers.length < 1) {
        return next({ code: 404 });
      }
      res.status(200).json(racers);
    })
    .catch(err => next(err));
});

router.post('/checkin', (req, res, next) => {
  db.checkInRacer(req.body)
    .then(response => {
      if (response) {
        console.log(response);
        return db.getRacer(req.body.id).then(response => {
          res.status(200).json(response);
        });
      }
      return next(400);
    })
    .catch(err => next(err));
});

// router.get('/distance/:distance', (req, res, next) => {
//   db('racers')
//     .where({ distance: req.params.distance })
//     .then(row => {
//       if (row.length < 1) {
//         return next({ code: 404 });
//       }
//       res.status(200).json(row);
//     })
//     .catch(err => next(err));
// });

// router.get('/checkedin', (req, res, next) => {
//   db.getCheckedInRacers()
//     .then(racers => {
//       res.status(200).json(racers);
//     })
//     .catch(err => next(err));
// });

// router.get('/signedup', (req, res, next) => {
//   db('racers')
//     .where({ checkedIn: 0 })
//     .then(racers => {
//       res.status(200).json(racers);
//     })
//     .catch(err => next(err));
// });

// router.post('/', (req, res, next) => {
//   const racer = req.body;
//   if (!(racer.name && racer.age && racer.distance)) {
//     return next({ code: 400 });
//   }
//   db.insert(racer)
//     .into('racers')
//     .then(ids => {
//       res.status(201).json(ids);
//     })
//     .catch(err => next(err));
// });

// router.put('/:id', (req, res, next) => {
//   const racer = req.body;
//   if (!(racer.name && racer.age && racer.distance)) {
//     return next({ code: 400 });
//   }
//   db('racers')
//     .where({ id: req.params.id })
//     .update(racer)
//     .then(response => {
//       if (!response) {
//         return next({ code: 404 });
//       }
//       res.status(200).json({ id: req.params.id });
//     })
//     .catch(err => next(err));
// });

// router.delete('/:id', (req, res, next) => {
//   db('racers')
//     .where({ id: req.params.id })
//     .del()
//     .then(data => {
//       if (!data) {
//         return next({ code: 404 });
//       }
//       res.status(200).json({ id: req.params.id });
//     })
//     .catch(err => next(err));
// });
module.exports = router;
