const db = require('../database/dbConfig.js');

async function add(user) {
  return db('users').insert(user);
}

function find() {
  return db("users")
}

function findBy(filter) {
  return db("users").where(filter)
}

module.exports = {
  add,
  find,
  findBy
}