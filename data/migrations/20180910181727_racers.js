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
    table.integer('checked_in').defaultTo(0);
    table.integer('race_number').unsigned();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('racers');
};
