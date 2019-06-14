"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _slug = _interopRequireDefault(require("slug"));

var Schema = _mongoose.default.Schema;
var BlogSchema = new Schema({
  title: {
    type: String,
    required: true,
    max: 128
  },
  description: {
    type: String,
    required: true,
    max: 512
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
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: false
  },
  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'Post',
    required: false
  }]
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

BlogSchema.methods.slugify = function () {
  this.slug = (0, _slug.default)(this.title);
};

BlogSchema.pre('validate', function (next) {
  if (!this.slug) {
    this.slugify();
  }

  return next();
});
BlogSchema.virtual('id').get(function () {
  return this._id;
});

var _default = _mongoose.default.model('Blog', BlogSchema);

exports.default = _default;