"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendToken = exports.getToken = exports.generateToken = exports.createToken = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config"));

var createToken = function createToken(auth) {
  return _jsonwebtoken.default.sign({
    id: auth.id
  }, _config.default.auth.jwtSecret, {
    expiresIn: 60 * 120
  });
};

exports.createToken = createToken;

var generateToken = function generateToken(req, res, next) {
  req.token = createToken(req.auth);
  return next();
};

exports.generateToken = generateToken;

var getToken = function getToken(headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(' ');

    if (parted.length === 2) {
      return parted[1];
    }

    return null;
  }

  return null;
};

exports.getToken = getToken;

var sendToken = function sendToken(req, res) {
  res.setHeader('x-auth-token', req.token);
  return res.status(200).send(JSON.stringify(req.user));
};

exports.sendToken = sendToken;