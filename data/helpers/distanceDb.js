const db = require('../dbConfig.js');

module.exports = {
  getDistances: function() {
    return db('distances')
      .leftJoin('racers', 'distances.id', 'racers.distance_id')
      .select(
        'distances.id',
        'distances.distance',
        'distances.cap',
        db.raw('count(racers.id) as total'),
        db.raw('sum(racers.checked_in) as checkedIn'),
      )
      .groupBy('distances.id');
  },
};
