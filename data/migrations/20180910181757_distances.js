exports.up = function(knex, Promise) {
  return knex.schema.createTable('distances', table => {
    table.increments('id');
    table.string('distance').notNullable();
    table.string('cap').notNullable();
    table
      .integer('current_count')
      .notNullable()
      .unsigned();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('distances');
};
