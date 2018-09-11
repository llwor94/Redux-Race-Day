exports.up = function(knex, Promise) {
  return knex.schema.createTable('age_groups', table => {
    table.increments('id');
    table.string('name').notNullable();
    table
      .integer('range_start')
      .notNullable()
      .unsigned();
    table
      .integer('range_end')
      .notNullable()
      .unsigned();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('age_groups');
};
