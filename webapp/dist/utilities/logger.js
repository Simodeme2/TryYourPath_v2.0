"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _winston = require("winston");

/*
Import the extrnal libraries:
- winston
*/
var align = _winston.format.align,
    combine = _winston.format.combine,
    colorize = _winston.format.colorize,
    timestamp = _winston.format.timestamp,
    printf = _winston.format.printf;
var logger = (0, _winston.createLogger)({
  format: combine(colorize(), timestamp(), align(), printf(function (info) {
    var tstamp = info.timestamp,
        level = info.level,
        message = info.message,
        args = (0, _objectWithoutProperties2.default)(info, ["timestamp", "level", "message"]);
    var ts = tstamp.slice(0, 19).replace('T', ' ');
    return "".concat(ts, " [").concat(level, "]: ").concat(message, " ").concat(Object.keys(args).length ? JSON.stringify(args, null, 2) : '');
  })),
  transports: [new _winston.transports.Console(), new _winston.transports.File({
    filename: './error.log',
    level: 'error'
  }), new _winston.transports.File({
    filename: './info.log',
    level: 'info'
  })],
  exitOnError: false
});
var _default = logger;
exports.default = _default;