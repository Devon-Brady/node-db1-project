const db = require("../../data/dbConfig");

function get() {
  return db("accounts");
}
function getById(id) {
    return db('accounts')
      .where({ id })
      .first();
  }
function create(account) {
  return db("accounts")
    .insert(account)
    .then(([id]) => {
      return db("accounts").where("id", id).first();
    });
}
function update(id, account) {
  const accountId = id;
  return db("accounts")
    .where("id", accountId)
    .update(account)
    .then(() => {
      return db("accounts").where("id", id).first();
    });
}

function remove(id) {
    return db("accounts").where("id",id).del()
      .then(()=>{
        return db("accounts")
      })
  }

module.exports = {
    get,
    getById,
    create,
    update,
    remove,
};
