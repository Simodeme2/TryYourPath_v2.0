"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _mongoosePaginate = _interopRequireDefault(require("mongoose-paginate"));

var _slug = _interopRequireDefault(require("slug"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _config = _interopRequireDefault(require("../../../../config"));

/*
Import external libraries:
- config
*/

/*
Import internal libraries:
- config
*/

/*
Constants
*/
var Schema = _mongoose.default.Schema;
var UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  },
  localProvider: {
    password: {
      type: String,
      required: false
    }
  },
  facebookProvider: {
    id: {
      type: String,
      required: false
    },
    token: {
      type: String,
      required: false
    }
  },
  published_at: {
    type: Date,
    required: false
  },
  deleted_at: {
    type: Date,
    required: false
  }
}, {
  toJSON: {
    virtuals: true
  },
  toObject: {
    virtuals: true
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

UserSchema.methods.slugify = function () {
  this.slug = (0, _slug.default)(this.email);
};

UserSchema.pre('validate', function (next) {
  if (!this.slug) {
    this.slugify();
  }

  return next();
});
UserSchema.pre('save', function (next) {
  var user = this;
  if (!user.isModified('localProvider.password')) return next(); // only hash the password if it has been modified (or is new)

  try {
    return _bcrypt.default.genSalt(_config.default.auth.bcrypt.SALT_WORK_FACTOR, function (errSalt, salt) {
      if (errSalt) throw errSalt;
      return _bcrypt.default.hash(user.localProvider.password, salt, function (errHash, hash) {
        if (errHash) throw errHash;
        user.localProvider.password = hash;
        return next();
      });
    });
  } catch (error) {
    return next(error);
  }
});

UserSchema.methods.comparePassword = function (candidatePassword, cb) {
  var user = this;

  _bcrypt.default.compare(candidatePassword, user.password, function (err, isMatch) {
    if (err) return cb(err, null);
    return cb(null, isMatch);
  });
};

UserSchema.virtual('id').get(function () {
  return this._id;
});
UserSchema.plugin(_mongoosePaginate.default);

var _default = _mongoose.default.model('User', UserSchema);

exports.default = _default;