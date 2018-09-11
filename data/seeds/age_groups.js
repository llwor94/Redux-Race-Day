exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('age_groups')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('age_groups').insert([
        { name: '-20', range_start: 0, range_end: 19 },
        { name: '21-30', range_start: 21, range_end: 30 },
        { name: '31-40', range_start: 31, range_end: 40 },
        { name: '41-50', range_start: 41, range_end: 50 },
        { name: '51-60', range_start: 51, range_end: 60 },
        { name: '61-70', range_start: 61, range_end: 70 },
        { name: '71+', range_start: 71, range_end: 100 },
      ]);
    });
};
