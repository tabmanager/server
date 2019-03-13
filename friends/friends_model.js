// const db = require('../database/dbConfig.js');

// module.exports = {
//   addTab,
//   addFriend,
//   remove,
//   update,
//   getFriends,
//   findTabsBy,
//   findByUserId,
// };

// function getFriends() {
//   return db('friends');
// }

// async function addFriend(friend) {
//   const [id] = await db('friends').insert(friend);

//   return findByUserId(id);
// }

// function findTabsBy(filter) {
//   return db('tabs').where(filter);
// }

// function update(id, changes) {
//   return db('tabs')
//     .where({ id })
//     .update(changes, '*');
// }

// function remove(id) {
//   return db('tabs')
//     .where({ id })
//     .del();
// }

// async function addTab(tab) {
//   const [id] = await db('tabs').insert(tab);

//   return findByUserId(id);
// }

// function findByUserId(user_id) {
//   return db('tabs')
//     .where({ user_id })
// }