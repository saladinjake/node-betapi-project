const mongoose = require('mongoose');
const User = require('./core/user');
const Team = require('./virtual_sports/football/teams');
const TeamStats = require('./virtual_sports/football/team_stats');
const Fixture = require('./virtual_sports/football/fixtures');

mongoose.Promise = global.Promise

module.exports = (settings) => {
  mongoose.connect(settings.db)
  let db = mongoose.connection

  db.once('open', err => {
    if (err) {
      throw err
    }
    console.log('Data processing now');
    User.seedAdminUser();
    Team.seedTeams();
    TeamStats.seedTeamStats();
    Fixture.seedEmptyFixtures();
  })
  db.on('error', err => console.log(`Database error: ${err}`))
}