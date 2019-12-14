const db = require('../database/dbConfig.js');

async function add(user) {
  return db('users').insert(user);
}

function find() {
  return db("users")
}

module.exports = {
  add,
  find
}