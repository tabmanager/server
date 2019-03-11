const db = require('../database/dbConfig.js');

module.exports = {
  addTab,
  getTabs,
  findTabsBy,
  findByUserId,
  // delete,
};

function getTabs() {
  return db('tabs');
}

function findTabsBy(filter) {
  return db('tabs').where(filter);
}

async function addTab(tab) {
  const [id] = await db('tabs').insert(tab);

  return findByUserId(id);
}

function findByUserId(user_id) {
  return db('tabs')
    .where({id: user_id})
    .first();
}

// function delete = user_id => {
//   return db('users')
//       .where({ id: user_id })
//       .first()
//       .del();
// }

// getTabByUser


