const { User } = require('../models');

const userData = [
  {
    "username": "wakaflakaflame",
    "password": "wopwopwopwopwopwopwopwop123"
  }
]

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;