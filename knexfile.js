// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/db.sqlite3',
    },

    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
      tableName: 'dbmigrations',
    },
    pool: {
      afterCreate: function(conn, cb) {
        conn.run('PRAGMA foreign_keys = ON', cb);
      },
    },
    seeds: { directory: './data/seeds' },
  },
};
