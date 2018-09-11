exports.up = function(knex, Promise) {
  return knex.schema.createTable('racers', table => {
    table.increments('id');
    table.string('name').notNullable();
    table
      .integer('age')
      .notNullable()
      .unsigned();
    table
      .integer('distance_id')
      .notNullable()
      .unsigned();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('racers');
};
