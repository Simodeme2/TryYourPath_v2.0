"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _service = _interopRequireDefault(require("../service"));

var _auth = _interopRequireDefault(require("./auth.routes"));

var _blog = _interopRequireDefault(require("./blog.routes"));

var _category = _interopRequireDefault(require("./category.routes"));

var _post = _interopRequireDefault(require("./post.routes"));

var _user = _interopRequireDefault(require("./user.routes"));

var _order = _interopRequireDefault(require("./order.routes"));

var _museum = _interopRequireDefault(require("./museum.routes"));

/*
Import the external libraries:
- express
*/

/*
Import the internal libraries:
- blog.routes.js
- category.routes.js
- post.routes.js
*/
// Initialize the AuthService
var authService = new _service.default(); // Define and initiate an express router

var apiV1Router = _express.default.Router();

(0, _auth.default)(apiV1Router, authService);
(0, _blog.default)(apiV1Router, authService);
(0, _category.default)(apiV1Router, authService);
(0, _post.default)(apiV1Router, authService);
(0, _user.default)(apiV1Router, authService);
(0, _order.default)(apiV1Router, authService);
(0, _museum.default)(apiV1Router, authService);
var _default = apiV1Router;
exports.default = _default;