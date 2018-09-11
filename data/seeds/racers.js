exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('racers')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('racers').insert([
        { name: 'Lauren Worthington', age: 24, distance_id: 1 },
        { name: 'Jacob Carlson', age: 59, distance_id: 3 },
        { name: 'Keith Price', age: 30, distance_id: 2 },
        { name: 'Claire Adams', age: 42, distance_id: 1 },
        { name: 'Trevor Fehrman', age: 37, distance_id: 3 },
        { name: 'Ashwin Sundararajan', age: 24, distance_id: 1 },
        { name: 'Liz Baker', age: 26, distance_id: 3 },
        { name: 'Roberto Little', age: 49, distance_id: 1 },
        { name: 'Leslie Martin', age: 29, distance_id: 2 },
        { name: 'Nelson Caldwell', age: 58, distance_id: 3 },
        { name: 'Doris Ray', age: 64, distance_id: 1 },
        { name: 'Marvin Garcia', age: 35, distance_id: 2 },
        { name: 'Charles Reid', age: 63, distance_id: 1 },
        { name: 'Greg Sims', age: 32, distance_id: 3 },
        { name: 'Felicia Snyder', age: 43, distance_id: 2 },
        { name: 'Connie Black', age: 18, distance_id: 1 },
        { name: 'Lisa Black', age: 72, distance_id: 2 },
      ]);
    });
};
