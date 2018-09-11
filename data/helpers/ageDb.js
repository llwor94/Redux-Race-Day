const db = require('../dbConfig.js');

module.exports = {
  getAgeGroups: function() {
    return db('age_groups')
      .leftJoin('checked_in', 'checked_in.age_id', 'age_groups.id')
      .leftJoin(
        knex.raw(
          'racers on racers.age between age_groups.range_start and age_groups.range_end',
        ),
      )
      .select(
        'age_groups.id',
        'age_groups.name',
        db.raw('count(racers.id) as total'),
        db.raw('count(checked_in.racer_id) as checkedIn'),
      )
      .groupBy('age_groups.id');
  },
};
