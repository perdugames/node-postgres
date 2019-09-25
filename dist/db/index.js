"use strict";

var _pg = require("pg");

require('dotenv').config();

var pool = new _pg.Pool();
module.exports = {
  query: function query(text, params) {
    return new Promise(function (resolve, reject) {
      pool.query(text, params).then(function (res) {
        var start = Date.now();
        var duration = Date.now() - start;
        console.log('executed query', {
          text: text,
          duration: duration,
          rows: res.rowCount
        });
        resolve(res);
      })["catch"](function (e) {
        return reject(e);
      });
    });
  }
};
//# sourceMappingURL=index.js.map