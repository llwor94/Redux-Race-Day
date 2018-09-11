exports.up = function(knex, Promise) {
  return knex.schema.createTable('age_groups', table => {
    table.increments('id');
    table.string('name').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('age_groups');
};
