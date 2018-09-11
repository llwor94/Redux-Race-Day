const db = require('../dbConfig.js');

module.exports = {
  getDistances: function() {
    return db('distances')
      .leftJoin('racers', 'distances.id', 'racers.distance_id')
      .leftJoin('checked_in', 'distances.id', 'checked_in.distance_id')
      .select(
        'distances.id',
        'distances.distance',
        'distances.cap',
        db.raw('count(racers.id) as total'),
        db.raw('count(checked_in.racer_id) as checkedIn'),
      )
      .groupBy('distances.id');
  },
};
