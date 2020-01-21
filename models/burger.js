const orm = require("../config/orm");

let burger = {
    // select and show all in db
    selectAll: function(table, cb) {
        orm.selectAll(table, function(res) {
            cb(res);
        });
    },
    // insert new burger to db
    insertOne: function(vals, cb) {
        orm.insertOne(vals, function(res) {
            cb(res);
        })
    },
    // update by id in db
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    }
}

module.exports = burger;