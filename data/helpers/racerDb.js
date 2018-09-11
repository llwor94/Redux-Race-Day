const db = require('../dbConfig.js');

module.exports = {
  getAllRacers: function() {
    return db('racers');
  },
  getRacer: function(id) {
    return db('racers').where({ id: id });
  },
  getCheckedInRacers: function() {
    return db('checkedIn');
  },
};
