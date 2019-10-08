var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burger", function(res) {
            cb(res);
        });
    },

    insertOne: function(cols, vals, cb) {
        orm.insertOne("burger", cols, vals, function(res) {
            cb(res);
        })
    },

    updateOne: function(obj, condition, cb) {
        orm.updateOne("burger", obj, condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;