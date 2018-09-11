exports.up = function(knex, Promise) {
  return knex.schema.createTable('checked_in', table => {
    table
      .integer('racer_id')
      .notNullable()
      .unsigned();
    table
      .integer('age_id')
      .notNullable()
      .unsigned();
    table
      .integer('distance_id')
      .notNullable()
      .unsigned();
    table
      .integer('race_number')
      .notNullable()
      .unsigned();
    table.foreign('racer_id').references('racers.id');

    table.foreign('age_id').references('age_groups.id');

    table.foreign('distance_id').references('distances.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('checked_in');
};
