"use strict";

var _user = _interopRequireDefault(require("./models/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require('dotenv').config();

_user["default"].select().then(function (res) {
  return console.log(res.rows[0]);
})["catch"](function (e) {
  return console.error(e.stack);
});

_user["default"].insert().then(function (res) {
  return console.log(res.rows[0]);
})["catch"](function (e) {
  return console.error(e.stack);
});

_user["default"].update().then(function (res) {
  return console.log(res.rows[0]);
})["catch"](function (e) {
  return console.error(e.stack);
});

_user["default"]["delete"]().then(function (res) {
  return console.log(res.rows[0]);
})["catch"](function (e) {
  return console.error(e.stack);
});
//# sourceMappingURL=index.js.map