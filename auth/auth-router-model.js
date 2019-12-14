const db = require('../database/dbConfig.js');

async function add(user) {
  const id = await db('users').insert(user, 'id');

  return db('users')
    .where({ id })
    .first();
}

module.exports = {
  add
}