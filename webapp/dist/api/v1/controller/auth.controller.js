"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _utilities = require("../../../utilities");

var _config = _interopRequireDefault(require("../../../config"));

/*
Import the internal libraries:
- * from database
- errorHandler
*/
var AuthController = function AuthController() {
  (0, _classCallCheck2.default)(this, AuthController);
  (0, _defineProperty2.default)(this, "loginLocal",
  /*#__PURE__*/
  function () {
    var _ref = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(authService, req, res, next) {
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              authService.passport.authenticate('local', _config.default.jwtSession, function (err, user, info) {
                if (err) {
                  return next(err);
                }

                if (!user) {
                  return next(new Error("Error Auth"));
                }

                req.auth = {
                  id: user.id
                };
                var token = (0, _utilities.createToken)(req.auth);
                return res.status(200).json({
                  email: user.email,
                  token: "".concat(token),
                  strategy: 'local'
                });
              })(req, res, next);

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2, _x3, _x4) {
      return _ref.apply(this, arguments);
    };
  }());
};

var _default = AuthController;
exports.default = _default;