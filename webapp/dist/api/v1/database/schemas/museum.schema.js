"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _mongoosePaginate = _interopRequireDefault(require("mongoose-paginate"));

var _slug = _interopRequireDefault(require("slug"));

var Schema = _mongoose.default.Schema;
var MuseumSchema = new Schema({
  name: {
    type: String,
    required: true,
    max: 128
  },
  location: {
    type: String,
    required: true,
    max: 128
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    lowercase: true,
    unique: true,
    required: true
  },
  published_at: {
    type: Date,
    required: false
  },
  deleted_at: {
    type: Date,
    required: false
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: false
  },
  museumId: {
    type: Schema.Types.ObjectId,
    ref: 'Museum',
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

MuseumSchema.methods.slugify = function () {
  this.slug = (0, _slug.default)(this.name);
};

MuseumSchema.pre('validate', function (next) {
  if (!this.slug) {
    this.slugify();
  }

  return next();
});
MuseumSchema.plugin(_mongoosePaginate.default);

var _default = _mongoose.default.model('Museum', MuseumSchema);

exports.default = _default;