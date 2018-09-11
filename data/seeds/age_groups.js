exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('age_groups')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('age_groups').insert([
        { name: '-20' },
        { name: '21-30' },
        { name: '31-40' },
        { name: '41-50' },
        { name: '51-60' },
        { name: '61-70' },
        { name: '70+' },
      ]);
    });
};
