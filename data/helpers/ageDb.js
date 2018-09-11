const db = require('../dbConfig.js');

module.exports = {
  getAgeGroups: function() {
    return db('age_groups')
      .leftJoin(
        db.raw(
          'racers on racers.age between age_groups.range_start and age_groups.range_end',
        ),
      )
      .select(
        'age_groups.id',
        'age_groups.name',
        db.raw('count(racers.id) as total'),
        db.raw('sum(racers.checked_in) as checkedIn'),
      )
      .groupBy('age_groups.id');
  },
};
