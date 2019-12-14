const db = require('../database/dbConfig.js');

async function add(user) {
  const id = db('users').insert(user);
  return id
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