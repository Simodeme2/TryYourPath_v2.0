"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleAPIError = exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

var APIError =
/*#__PURE__*/
function (_Error) {
  (0, _inherits2.default)(APIError, _Error);

  function APIError(status, message) {
    var _this;

    (0, _classCallCheck2.default)(this, APIError);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(APIError).call(this, message));
    _this.status = status;
    return _this;
  }

  return APIError;
}((0, _wrapNativeSuper2.default)(Error));

exports.default = APIError;

var handleAPIError = function handleAPIError(status, message, next) {
  var error = new APIError(status, message);
  return next(error);
};

exports.handleAPIError = handleAPIError;