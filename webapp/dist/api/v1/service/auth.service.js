"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _passport = _interopRequireDefault(require("passport"));

var passportLocal = _interopRequireWildcard(require("passport-local"));

var _passportJwt = _interopRequireDefault(require("passport-jwt"));

var _database = require("../database");

var _config = _interopRequireDefault(require("../../../config"));

/*
Import external libraries
*/

/*
Import internal libraries
*/

/*
Constants
*/
var LocalStrategy = passportLocal.Strategy;
var ExtractJwt = _passportJwt.default.ExtractJwt,
    JwtStrategy = _passportJwt.default.Strategy;

var AuthService = function AuthService() {
  (0, _classCallCheck2.default)(this, AuthService);
  (0, _defineProperty2.default)(this, "initializeLocalStrategy", function () {
    _passport.default.use(new LocalStrategy({
      usernameField: 'email'
    },
    /*#__PURE__*/
    function () {
      var _ref = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(email, password, done) {
        var user;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _database.User.findOne({
                  email: email
                });

              case 3:
                user = _context.sent;

                if (user) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return", done(null, false, {
                  message: 'No user by that email'
                }));

              case 6:
                return _context.abrupt("return", user.comparePassword(password, function (isMatch) {
                  if (!isMatch) {
                    return done(null, false);
                  }

                  return done(null, user);
                }));

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", done(_context.t0));

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 9]]);
      }));

      return function (_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      };
    }()));
  });
  (0, _defineProperty2.default)(this, "initializeJwtStrategy", function () {
    _passport.default.use(new JwtStrategy({
      secretOrKey: _config.default.auth.jwtSecret,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    }, function (jwtPayload, done) {
      var id = jwtPayload.id;

      _database.User.findById(id, function (err, user) {
        if (err) {
          return done(err);
        }

        if (!user) {
          return done(null, false);
        }

        return done(null, user);
      });
    }));
  });
  this.initializeLocalStrategy();
  this.initializeJwtStrategy();

  _passport.default.serializeUser(function (user, done) {
    done(null, user);
  });

  _passport.default.deserializeUser(function (user, done) {
    done(null, user);
  });

  this.passport = _passport.default;
};

var _default = AuthService;
exports.default = _default;