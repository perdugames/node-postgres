"use strict";

var _db = _interopRequireDefault(require("../db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_db["default"].query('SELECT NOW() as now').then(function (res) {
  return console.log(res.rows[0]);
})["catch"](function (e) {
  return console.error(e.stack);
});

module.exports = {
  select: function select(table, filter) {
    return new Promise(function (resolve, reject) {
      _db["default"].query('SELECT $1::text as message', ['SELECT!']).then(function (res) {
        return resolve(res);
      })["catch"](function (e) {
        return reject(e);
      });
    });
  },
  insert: function insert(text, params) {
    return new Promise(function (resolve, reject) {
      _db["default"].query('SELECT $1::text as message', ['INSERT!']).then(function (res) {
        return resolve(res);
      })["catch"](function (e) {
        return reject(e);
      });
    });
  },
  update: function update(text, params) {
    return new Promise(function (resolve, reject) {
      _db["default"].query('SELECT $1::text as message', ['UPDATE!']).then(function (res) {
        return resolve(res);
      })["catch"](function (e) {
        return reject(e);
      });
    });
  },
  "delete": function _delete(text, params) {
    return new Promise(function (resolve, reject) {
      _db["default"].query('SELECT $1::text as message', ['DELETE!']).then(function (res) {
        return resolve(res);
      })["catch"](function (e) {
        return reject(e);
      });
    });
  }
};
//# sourceMappingURL=user.js.map