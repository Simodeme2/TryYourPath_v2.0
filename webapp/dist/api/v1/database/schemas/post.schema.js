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
var PostSchema = new Schema({
  title: {
    type: String,
    required: true,
    max: 128
  },
  synopsis: {
    type: String,
    required: true,
    max: 1024
  },
  body: {
    type: String,
    required: false
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

PostSchema.methods.slugify = function () {
  this.slug = (0, _slug.default)(this.title);
};

PostSchema.pre('validate', function (next) {
  if (!this.slug) {
    this.slugify();
  }

  return next();
});
PostSchema.virtual('id').get(function () {
  return this._id;
});
PostSchema.virtual('category', {
  ref: 'Category',
  localField: 'categoryId',
  foreignField: '_id',
  justOne: true
});
PostSchema.plugin(_mongoosePaginate.default);

var _default = _mongoose.default.model('Post', PostSchema);

exports.default = _default;