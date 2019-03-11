const db = require('../database/dbConfig.js');

module.exports = {
  add,
  getTabs,
  findTabsBy,
  findById,
};

function getTabs() {
  return db('tabs');
}

function findTabsBy(filter) {
  return db('tabs').where(filter);
}

async function add(tab) {
  const [id] = await db('tabs').insert(tab);

  return findById(id);
}

function findById(id) {
  return db('tabs')
    .where({id: id})
    .first();
}


