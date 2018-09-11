const db = require('../dbConfig.js');

module.exports = {
  getAllRacers: function() {
    return db('racers')
      .join('distances', 'distances.id', 'racers.distance_id')
      .select(
        'racers.id',
        'racers.name',
        'racers.age',
        'racers.checked_in',
        'racers.race_number',
        'racers.distance_id',
        'distances.distance',
      );
  },
  getRacer: function(id) {
    return db('racers').where('id', '=', id);
  },
  getCheckedInRacers: function() {
    return db('racers').where({ checked_in: 1 });
  },
  checkInRacer: function(racer) {
    let query = db('racers')
      .leftJoin('distances', 'distances.id', racer.distance_id)
      .select('current_count')
      .first();

    let increment = db('distances')
      .where('id', '=', racer.distance_id)
      .increment('current_count', 1);

    const promises = [query, increment];

    return Promise.all(promises).then(results => {
      let [query, increcment] = results;
      return db('racers')
        .where('id', '=', racer.id)
        .update({
          race_number: query.current_count,
          checked_in: 1,
        });
    });
  },
};
