const db = require('../dbConfig.js');

module.exports = {
  getDistances: function() {
    db('distances')
      .leftJoin('racers', 'distances.id', 'racers.distance_id')
      .leftJoin('checkedIn', 'distances.id', 'checkedIn.distance_id')
      .select(
        'distances.id',
        'distances.distance',
        'distances.cap',
        db.raw('count(racers.racer_id) as total'),
        db.raw('count(checkedIn.racer_id) as checkedIn'),
      )
      .groupBy('distances.id');
  },
};
