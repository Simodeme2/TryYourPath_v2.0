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
var CategorySchema = new Schema({
  name: {
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
  parentCategoryId: {
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

CategorySchema.methods.slugify = function () {
  this.slug = (0, _slug.default)(this.name);
};

CategorySchema.pre('validate', function (next) {
  if (!this.slug) {
    this.slugify();
  }

  return next();
});
CategorySchema.virtual('id').get(function () {
  return this._id;
});
CategorySchema.virtual('subCategories', {
  ref: 'Category',
  localField: '_id',
  foreignField: 'parentCategoryId',
  justOne: false
});
CategorySchema.plugin(_mongoosePaginate.default);

var _default = _mongoose.default.model('Category', CategorySchema);

exports.default = _default;