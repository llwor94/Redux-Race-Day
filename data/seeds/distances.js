exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('distances')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('distances').insert([
        { distance: '2 miles', cap: 'pink', current_count: '100' },
        { distance: '3 miles', cap: 'green', current_count: '200' },
        { distance: '8 miles', cap: 'yellow', current_count: '300' },
      ]);
    });
};
