"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _controller = require("../controller");

/*
Import the internal libraries:
- AuthController
*/
// Create instance of AuthController otherwise you can't use it
var authController = new _controller.AuthController();

var initializeEndpoints = function initializeEndpoints(parentRouter, authService) {
  parentRouter.post('/login/local', function (req, res, next) {
    return authController.loginLocal(authService, req, res, next);
  });
};

var _default = initializeEndpoints;
exports.default = _default;