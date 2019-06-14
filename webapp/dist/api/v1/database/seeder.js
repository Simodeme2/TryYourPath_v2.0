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

var _faker = _interopRequireDefault(require("faker"));

var _utilities = require("../../../utilities");

var _schemas = require("./schemas");

/*
Import the external libraries:
- faker
*/

/*
Import the internal libraries:
- logger
- Blog
- Category
- Post
- User
*/
var Seeder = function Seeder() {
  var _this = this;

  (0, _classCallCheck2.default)(this, Seeder);
  (0, _defineProperty2.default)(this, "blogCreate",
  /*#__PURE__*/
  function () {
    var _ref = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(title, description) {
      var blogDetail, blog, newblog;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              blogDetail = {
                title: title,
                description: description,
                categoryId: _this.getRandomCategory(),
                posts: _this.getRandomPosts()
              };
              blog = new _schemas.Blog(blogDetail);
              _context.prev = 2;
              _context.next = 5;
              return blog.save();

            case 5:
              newblog = _context.sent;

              _this.blogs.push(newblog);

              _utilities.logger.log({
                level: 'info',
                message: "Blog created with id: ".concat(newblog.id, "!")
              });

              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](2);

              _utilities.logger.log({
                level: 'info',
                message: "An error occurred when creating a blog: ".concat(_context.t0, "!")
              });

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 10]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
  (0, _defineProperty2.default)(this, "categoryCreate",
  /*#__PURE__*/
  function () {
    var _ref2 = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2(name, description) {
      var categoryDetail, category, newCategory;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              categoryDetail = {
                name: name,
                description: description
              };
              category = new _schemas.Category(categoryDetail);
              _context2.prev = 2;
              _context2.next = 5;
              return category.save();

            case 5:
              newCategory = _context2.sent;

              _this.categories.push(newCategory);

              _utilities.logger.log({
                level: 'info',
                message: "Category created with id: ".concat(newCategory.id, "!")
              });

              _context2.next = 13;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](2);

              _utilities.logger.log({
                level: 'info',
                message: "An error occurred when creating a category: ".concat(_context2.t0, "!")
              });

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 10]]);
    }));

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());
  (0, _defineProperty2.default)(this, "postCreate",
  /*#__PURE__*/
  function () {
    var _ref3 = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee3(title, synopsis, body) {
      var postDetail, post, newPost;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              postDetail = {
                title: title,
                synopsis: synopsis,
                body: body,
                categoryId: _this.getRandomCategory()
              };
              post = new _schemas.Post(postDetail);
              _context3.prev = 2;
              _context3.next = 5;
              return post.save();

            case 5:
              newPost = _context3.sent;

              _this.posts.push(newPost);

              _utilities.logger.log({
                level: 'info',
                message: "Post created with id: ".concat(newPost.id, "!")
              });

              _context3.next = 13;
              break;

            case 10:
              _context3.prev = 10;
              _context3.t0 = _context3["catch"](2);

              _utilities.logger.log({
                level: 'info',
                message: "An error occurred when creating a post: ".concat(_context3.t0, "!")
              });

            case 13:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[2, 10]]);
    }));

    return function (_x5, _x6, _x7) {
      return _ref3.apply(this, arguments);
    };
  }());
  (0, _defineProperty2.default)(this, "userCreate",
  /*#__PURE__*/
  function () {
    var _ref4 = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee4(email, password) {
      var userDetail, user, newUser;
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              userDetail = {
                email: email,
                localProvider: {
                  password: password
                }
              };
              user = new _schemas.User(userDetail);
              _context4.prev = 2;
              _context4.next = 5;
              return user.save();

            case 5:
              newUser = _context4.sent;

              _this.users.push(newUser);

              _utilities.logger.log({
                level: 'info',
                message: "User created with id: ".concat(newUser.id, "!")
              });

              _context4.next = 13;
              break;

            case 10:
              _context4.prev = 10;
              _context4.t0 = _context4["catch"](2);

              _utilities.logger.log({
                level: 'info',
                message: "An error occurred when creating a user: ".concat(_context4.t0, "!")
              });

            case 13:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[2, 10]]);
    }));

    return function (_x8, _x9) {
      return _ref4.apply(this, arguments);
    };
  }());
  (0, _defineProperty2.default)(this, "companyCreate",
  /*#__PURE__*/
  function () {
    var _ref5 = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee5(name, description) {
      var companyDetail, company, newCompany;
      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              companyDetail = {
                name: name,
                description: description
              };
              company = new _schemas.Company(companyDetail);
              _context5.prev = 2;
              _context5.next = 5;
              return company.save();

            case 5:
              newCompany = _context5.sent;

              _this.companies.push(newCompany);

              _utilities.logger.log({
                level: 'info',
                message: "Company created with id: ".concat(newCompany.id, "!")
              });

              _context5.next = 13;
              break;

            case 10:
              _context5.prev = 10;
              _context5.t0 = _context5["catch"](2);

              _utilities.logger.log({
                level: 'info',
                message: "An error occurred when creating a company: ".concat(_context5.t0, "!")
              });

            case 13:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[2, 10]]);
    }));

    return function (_x10, _x11) {
      return _ref5.apply(this, arguments);
    };
  }());
  (0, _defineProperty2.default)(this, "orderCreate",
  /*#__PURE__*/
  function () {
    var _ref6 = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee6(name, amount) {
      var orderDetail, order, newOrder;
      return _regenerator.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              orderDetail = {
                name: name,
                amount: amount,
                userId: _this.getRandomUser() // museumId: this.getRandomMuseum(),

              };
              order = new _schemas.Order(orderDetail);
              _context6.prev = 2;
              _context6.next = 5;
              return order.save();

            case 5:
              newOrder = _context6.sent;

              _this.orders.push(newOrder);

              _utilities.logger.log({
                level: 'info',
                message: "Order created with id: ".concat(newOrder.id, "!")
              });

              _context6.next = 13;
              break;

            case 10:
              _context6.prev = 10;
              _context6.t0 = _context6["catch"](2);

              _utilities.logger.log({
                level: 'info',
                message: "An error occurred when creating a order: ".concat(_context6.t0, "!")
              });

            case 13:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[2, 10]]);
    }));

    return function (_x12, _x13) {
      return _ref6.apply(this, arguments);
    };
  }());
  (0, _defineProperty2.default)(this, "museumCreate",
  /*#__PURE__*/
  function () {
    var _ref7 = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee7(name, location, description) {
      var museumDetail, museum, newMuseum;
      return _regenerator.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              museumDetail = {
                name: name,
                location: location,
                description: description
              };
              museum = new _schemas.Museum(museumDetail);
              _context7.prev = 2;
              _context7.next = 5;
              return museum.save();

            case 5:
              newMuseum = _context7.sent;

              _this.musea.push(newMuseum);

              _utilities.logger.log({
                level: 'info',
                message: "Museum created with id: ".concat(newMuseum.id, "!")
              });

              _context7.next = 13;
              break;

            case 10:
              _context7.prev = 10;
              _context7.t0 = _context7["catch"](2);

              _utilities.logger.log({
                level: 'info',
                message: "An error occurred when creating a museum: ".concat(_context7.t0, "!")
              });

            case 13:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[2, 10]]);
    }));

    return function (_x14, _x15, _x16) {
      return _ref7.apply(this, arguments);
    };
  }());
  (0, _defineProperty2.default)(this, "createBlogs",
  /*#__PURE__*/
  (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee9() {
    return _regenerator.default.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return Promise.all([(0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee8() {
              return _regenerator.default.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      return _context8.abrupt("return", _this.blogCreate(_faker.default.lorem.sentence(), _faker.default.lorem.paragraph()));

                    case 1:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8);
            }))()]);

          case 2:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  })));
  (0, _defineProperty2.default)(this, "createCategories",
  /*#__PURE__*/
  (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee14() {
    return _regenerator.default.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _context14.next = 2;
            return Promise.all([(0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee10() {
              return _regenerator.default.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      return _context10.abrupt("return", _this.categoryCreate(_faker.default.lorem.word(), _faker.default.lorem.sentence()));

                    case 1:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10);
            }))(), (0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee11() {
              return _regenerator.default.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      return _context11.abrupt("return", _this.categoryCreate(_faker.default.lorem.word(), _faker.default.lorem.sentence()));

                    case 1:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11);
            }))(), (0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee12() {
              return _regenerator.default.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      return _context12.abrupt("return", _this.categoryCreate(_faker.default.lorem.word(), _faker.default.lorem.sentence()));

                    case 1:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12);
            }))(), (0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee13() {
              return _regenerator.default.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      return _context13.abrupt("return", _this.categoryCreate(_faker.default.lorem.word(), _faker.default.lorem.sentence()));

                    case 1:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13);
            }))()]);

          case 2:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14);
  })));
  (0, _defineProperty2.default)(this, "createPosts",
  /*#__PURE__*/
  (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee22() {
    return _regenerator.default.wrap(function _callee22$(_context22) {
      while (1) {
        switch (_context22.prev = _context22.next) {
          case 0:
            _context22.next = 2;
            return Promise.all([(0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee15() {
              return _regenerator.default.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      return _context15.abrupt("return", _this.postCreate(_faker.default.lorem.sentence(), _faker.default.lorem.paragraph(), "<p>".concat(_faker.default.lorem.paragraphs(10, '</p></p>'), "</p>")));

                    case 1:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15);
            }))(), (0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee16() {
              return _regenerator.default.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      return _context16.abrupt("return", _this.postCreate(_faker.default.lorem.sentence(), _faker.default.lorem.paragraph(), "<p>".concat(_faker.default.lorem.paragraphs(10, '</p></p>'), "</p>")));

                    case 1:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16);
            }))(), (0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee17() {
              return _regenerator.default.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      return _context17.abrupt("return", _this.postCreate(_faker.default.lorem.sentence(), _faker.default.lorem.paragraph(), "<p>".concat(_faker.default.lorem.paragraphs(10, '</p></p>'), "</p>")));

                    case 1:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17);
            }))(), (0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee18() {
              return _regenerator.default.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      return _context18.abrupt("return", _this.postCreate(_faker.default.lorem.sentence(), _faker.default.lorem.paragraph(), "<p>".concat(_faker.default.lorem.paragraphs(10, '</p></p>'), "</p>")));

                    case 1:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18);
            }))(), (0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee19() {
              return _regenerator.default.wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      return _context19.abrupt("return", _this.postCreate(_faker.default.lorem.sentence(), _faker.default.lorem.paragraph(), "<p>".concat(_faker.default.lorem.paragraphs(10, '</p></p>'), "</p>")));

                    case 1:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19);
            }))(), (0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee20() {
              return _regenerator.default.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      return _context20.abrupt("return", _this.postCreate(_faker.default.lorem.sentence(), _faker.default.lorem.paragraph(), "<p>".concat(_faker.default.lorem.paragraphs(10, '</p></p>'), "</p>")));

                    case 1:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20);
            }))(), (0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee21() {
              return _regenerator.default.wrap(function _callee21$(_context21) {
                while (1) {
                  switch (_context21.prev = _context21.next) {
                    case 0:
                      return _context21.abrupt("return", _this.postCreate(_faker.default.lorem.sentence(), _faker.default.lorem.paragraph(), "<p>".concat(_faker.default.lorem.paragraphs(10, '</p></p>'), "</p>")));

                    case 1:
                    case "end":
                      return _context21.stop();
                  }
                }
              }, _callee21);
            }))()]);

          case 2:
          case "end":
            return _context22.stop();
        }
      }
    }, _callee22);
  })));
  (0, _defineProperty2.default)(this, "createUsers",
  /*#__PURE__*/
  (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee30() {
    return _regenerator.default.wrap(function _callee30$(_context30) {
      while (1) {
        switch (_context30.prev = _context30.next) {
          case 0:
            _context30.next = 2;
            return Promise.all([(0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee23() {
              return _regenerator.default.wrap(function _callee23$(_context23) {
                while (1) {
                  switch (_context23.prev = _context23.next) {
                    case 0:
                      return _context23.abrupt("return", _this.userCreate(_faker.default.internet.email(), 'wicked4u'));

                    case 1:
                    case "end":
                      return _context23.stop();
                  }
                }
              }, _callee23);
            }))(), (0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee24() {
              return _regenerator.default.wrap(function _callee24$(_context24) {
                while (1) {
                  switch (_context24.prev = _context24.next) {
                    case 0:
                      return _context24.abrupt("return", _this.userCreate(_faker.default.internet.email(), 'wicked4u'));

                    case 1:
                    case "end":
                      return _context24.stop();
                  }
                }
              }, _callee24);
            }))(), (0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee25() {
              return _regenerator.default.wrap(function _callee25$(_context25) {
                while (1) {
                  switch (_context25.prev = _context25.next) {
                    case 0:
                      return _context25.abrupt("return", _this.userCreate(_faker.default.internet.email(), 'wicked4u'));

                    case 1:
                    case "end":
                      return _context25.stop();
                  }
                }
              }, _callee25);
            }))(), (0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee26() {
              return _regenerator.default.wrap(function _callee26$(_context26) {
                while (1) {
                  switch (_context26.prev = _context26.next) {
                    case 0:
                      return _context26.abrupt("return", _this.userCreate(_faker.default.internet.email(), 'wicked4u'));

                    case 1:
                    case "end":
                      return _context26.stop();
                  }
                }
              }, _callee26);
            }))(), (0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee27() {
              return _regenerator.default.wrap(function _callee27$(_context27) {
                while (1) {
                  switch (_context27.prev = _context27.next) {
                    case 0:
                      return _context27.abrupt("return", _this.userCreate(_faker.default.internet.email(), 'wicked4u'));

                    case 1:
                    case "end":
                      return _context27.stop();
                  }
                }
              }, _callee27);
            }))(), (0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee28() {
              return _regenerator.default.wrap(function _callee28$(_context28) {
                while (1) {
                  switch (_context28.prev = _context28.next) {
                    case 0:
                      return _context28.abrupt("return", _this.userCreate(_faker.default.internet.email(), 'wicked4u'));

                    case 1:
                    case "end":
                      return _context28.stop();
                  }
                }
              }, _callee28);
            }))(), (0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee29() {
              return _regenerator.default.wrap(function _callee29$(_context29) {
                while (1) {
                  switch (_context29.prev = _context29.next) {
                    case 0:
                      return _context29.abrupt("return", _this.userCreate(_faker.default.internet.email(), 'wicked4u'));

                    case 1:
                    case "end":
                      return _context29.stop();
                  }
                }
              }, _callee29);
            }))()]);

          case 2:
          case "end":
            return _context30.stop();
        }
      }
    }, _callee30);
  })));
  (0, _defineProperty2.default)(this, "createCompanies",
  /*#__PURE__*/
  (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee37() {
    return _regenerator.default.wrap(function _callee37$(_context37) {
      while (1) {
        switch (_context37.prev = _context37.next) {
          case 0:
            _context37.next = 2;
            return Promise.all([(0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee31() {
              return _regenerator.default.wrap(function _callee31$(_context31) {
                while (1) {
                  switch (_context31.prev = _context31.next) {
                    case 0:
                      return _context31.abrupt("return", _this.companyCreate(_faker.default.company.companyName(), _faker.default.lorem.sentence()));

                    case 1:
                    case "end":
                      return _context31.stop();
                  }
                }
              }, _callee31);
            }))(), (0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee32() {
              return _regenerator.default.wrap(function _callee32$(_context32) {
                while (1) {
                  switch (_context32.prev = _context32.next) {
                    case 0:
                      return _context32.abrupt("return", _this.companyCreate(_faker.default.company.companyName(), _faker.default.lorem.sentence()));

                    case 1:
                    case "end":
                      return _context32.stop();
                  }
                }
              }, _callee32);
            }))(), (0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee33() {
              return _regenerator.default.wrap(function _callee33$(_context33) {
                while (1) {
                  switch (_context33.prev = _context33.next) {
                    case 0:
                      return _context33.abrupt("return", _this.companyCreate(_faker.default.company.companyName(), _faker.default.lorem.sentence()));

                    case 1:
                    case "end":
                      return _context33.stop();
                  }
                }
              }, _callee33);
            }))(), (0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee34() {
              return _regenerator.default.wrap(function _callee34$(_context34) {
                while (1) {
                  switch (_context34.prev = _context34.next) {
                    case 0:
                      return _context34.abrupt("return", _this.companyCreate(_faker.default.company.companyName(), _faker.default.lorem.sentence()));

                    case 1:
                    case "end":
                      return _context34.stop();
                  }
                }
              }, _callee34);
            }))(), (0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee35() {
              return _regenerator.default.wrap(function _callee35$(_context35) {
                while (1) {
                  switch (_context35.prev = _context35.next) {
                    case 0:
                      return _context35.abrupt("return", _this.companyCreate(_faker.default.company.companyName(), _faker.default.lorem.sentence()));

                    case 1:
                    case "end":
                      return _context35.stop();
                  }
                }
              }, _callee35);
            }))(), (0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee36() {
              return _regenerator.default.wrap(function _callee36$(_context36) {
                while (1) {
                  switch (_context36.prev = _context36.next) {
                    case 0:
                      return _context36.abrupt("return", _this.companyCreate(_faker.default.company.companyName(), _faker.default.lorem.sentence()));

                    case 1:
                    case "end":
                      return _context36.stop();
                  }
                }
              }, _callee36);
            }))()]);

          case 2:
          case "end":
            return _context37.stop();
        }
      }
    }, _callee37);
  })));
  (0, _defineProperty2.default)(this, "createOrders",
  /*#__PURE__*/
  (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee43() {
    return _regenerator.default.wrap(function _callee43$(_context43) {
      while (1) {
        switch (_context43.prev = _context43.next) {
          case 0:
            _context43.next = 2;
            return Promise.all([(0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee38() {
              return _regenerator.default.wrap(function _callee38$(_context38) {
                while (1) {
                  switch (_context38.prev = _context38.next) {
                    case 0:
                      return _context38.abrupt("return", _this.orderCreate(_faker.default.system.fileName(), _faker.default.random.number()));

                    case 1:
                    case "end":
                      return _context38.stop();
                  }
                }
              }, _callee38);
            }))(), (0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee39() {
              return _regenerator.default.wrap(function _callee39$(_context39) {
                while (1) {
                  switch (_context39.prev = _context39.next) {
                    case 0:
                      return _context39.abrupt("return", _this.orderCreate(_faker.default.system.fileName(), _faker.default.random.number()));

                    case 1:
                    case "end":
                      return _context39.stop();
                  }
                }
              }, _callee39);
            }))(), (0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee40() {
              return _regenerator.default.wrap(function _callee40$(_context40) {
                while (1) {
                  switch (_context40.prev = _context40.next) {
                    case 0:
                      return _context40.abrupt("return", _this.orderCreate(_faker.default.system.fileName(), _faker.default.random.number()));

                    case 1:
                    case "end":
                      return _context40.stop();
                  }
                }
              }, _callee40);
            }))(), (0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee41() {
              return _regenerator.default.wrap(function _callee41$(_context41) {
                while (1) {
                  switch (_context41.prev = _context41.next) {
                    case 0:
                      return _context41.abrupt("return", _this.orderCreate(_faker.default.system.fileName(), _faker.default.random.number()));

                    case 1:
                    case "end":
                      return _context41.stop();
                  }
                }
              }, _callee41);
            }))(), (0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee42() {
              return _regenerator.default.wrap(function _callee42$(_context42) {
                while (1) {
                  switch (_context42.prev = _context42.next) {
                    case 0:
                      return _context42.abrupt("return", _this.orderCreate(_faker.default.system.fileName(), _faker.default.random.number()));

                    case 1:
                    case "end":
                      return _context42.stop();
                  }
                }
              }, _callee42);
            }))()]);

          case 2:
          case "end":
            return _context43.stop();
        }
      }
    }, _callee43);
  })));
  (0, _defineProperty2.default)(this, "createMusea",
  /*#__PURE__*/
  (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee51() {
    return _regenerator.default.wrap(function _callee51$(_context51) {
      while (1) {
        switch (_context51.prev = _context51.next) {
          case 0:
            _context51.next = 2;
            return Promise.all([(0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee44() {
              return _regenerator.default.wrap(function _callee44$(_context44) {
                while (1) {
                  switch (_context44.prev = _context44.next) {
                    case 0:
                      return _context44.abrupt("return", _this.museumCreate(_faker.default.company.companyName(), _faker.default.address.secondaryAddress(), _faker.default.lorem.text(), _faker.default.image.imageUrl()));

                    case 1:
                    case "end":
                      return _context44.stop();
                  }
                }
              }, _callee44);
            }))(), (0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee45() {
              return _regenerator.default.wrap(function _callee45$(_context45) {
                while (1) {
                  switch (_context45.prev = _context45.next) {
                    case 0:
                      return _context45.abrupt("return", _this.museumCreate(_faker.default.company.companyName(), _faker.default.address.secondaryAddress(), _faker.default.lorem.text(), _faker.default.image.imageUrl()));

                    case 1:
                    case "end":
                      return _context45.stop();
                  }
                }
              }, _callee45);
            }))(), (0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee46() {
              return _regenerator.default.wrap(function _callee46$(_context46) {
                while (1) {
                  switch (_context46.prev = _context46.next) {
                    case 0:
                      return _context46.abrupt("return", _this.museumCreate(_faker.default.company.companyName(), _faker.default.address.secondaryAddress(), _faker.default.lorem.text(), _faker.default.image.imageUrl()));

                    case 1:
                    case "end":
                      return _context46.stop();
                  }
                }
              }, _callee46);
            }))(), (0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee47() {
              return _regenerator.default.wrap(function _callee47$(_context47) {
                while (1) {
                  switch (_context47.prev = _context47.next) {
                    case 0:
                      return _context47.abrupt("return", _this.museumCreate(_faker.default.company.companyName(), _faker.default.address.secondaryAddress(), _faker.default.lorem.text(), _faker.default.image.imageUrl()));

                    case 1:
                    case "end":
                      return _context47.stop();
                  }
                }
              }, _callee47);
            }))(), (0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee48() {
              return _regenerator.default.wrap(function _callee48$(_context48) {
                while (1) {
                  switch (_context48.prev = _context48.next) {
                    case 0:
                      return _context48.abrupt("return", _this.museumCreate(_faker.default.company.companyName(), _faker.default.address.secondaryAddress(), _faker.default.lorem.text(), _faker.default.image.imageUrl()));

                    case 1:
                    case "end":
                      return _context48.stop();
                  }
                }
              }, _callee48);
            }))(), (0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee49() {
              return _regenerator.default.wrap(function _callee49$(_context49) {
                while (1) {
                  switch (_context49.prev = _context49.next) {
                    case 0:
                      return _context49.abrupt("return", _this.museumCreate(_faker.default.company.companyName(), _faker.default.address.secondaryAddress(), _faker.default.lorem.text(), _faker.default.image.imageUrl()));

                    case 1:
                    case "end":
                      return _context49.stop();
                  }
                }
              }, _callee49);
            }))(), (0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee50() {
              return _regenerator.default.wrap(function _callee50$(_context50) {
                while (1) {
                  switch (_context50.prev = _context50.next) {
                    case 0:
                      return _context50.abrupt("return", _this.museumCreate(_faker.default.company.companyName(), _faker.default.address.secondaryAddress(), _faker.default.lorem.text(), _faker.default.image.imageUrl()));

                    case 1:
                    case "end":
                      return _context50.stop();
                  }
                }
              }, _callee50);
            }))()]);

          case 2:
          case "end":
            return _context51.stop();
        }
      }
    }, _callee51);
  })));
  (0, _defineProperty2.default)(this, "getRandomCategory", function () {
    var category = null;

    if (_this.categories && _this.categories.length > 0) {
      category = _this.categories[Math.round(Math.random() * (_this.categories.length - 1))];
    }

    return category;
  });
  (0, _defineProperty2.default)(this, "getRandomPosts", function () {
    var cPosts = null;

    if (_this.posts && _this.posts.length > 0) {
      var nPosts = Math.round(Math.random() * (_this.posts.length - 1));
      cPosts = _this.posts.slice(0, _this.posts.length);

      while (cPosts.length > nPosts) {
        cPosts.splice(Math.round(Math.random() * (_this.posts.length - 1)), 1);
      }
    }

    return cPosts;
  });
  (0, _defineProperty2.default)(this, "getRandomUser", function () {
    var user = null;

    if (_this.users && _this.users.length > 0) {
      user = _this.users[Math.round(Math.random() * (_this.users.length - 1))];
    }

    return user;
  });
  (0, _defineProperty2.default)(this, "getRandomCompany", function () {
    var user = null;

    if (_this.users && _this.users.length > 0) {
      user = _this.users[Math.round(Math.random() * (_this.users.length - 1))];
    }

    return user;
  });
  (0, _defineProperty2.default)(this, "seed",
  /*#__PURE__*/
  (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee59() {
    return _regenerator.default.wrap(function _callee59$(_context59) {
      while (1) {
        switch (_context59.prev = _context59.next) {
          case 0:
            _context59.next = 2;
            return _schemas.Category.estimatedDocumentCount().exec().then(
            /*#__PURE__*/
            function () {
              var _ref53 = (0, _asyncToGenerator2.default)(
              /*#__PURE__*/
              _regenerator.default.mark(function _callee52(count) {
                return _regenerator.default.wrap(function _callee52$(_context52) {
                  while (1) {
                    switch (_context52.prev = _context52.next) {
                      case 0:
                        if (!(count === 0)) {
                          _context52.next = 3;
                          break;
                        }

                        _context52.next = 3;
                        return _this.createCategories();

                      case 3:
                        return _context52.abrupt("return", _schemas.Category.find().exec());

                      case 4:
                      case "end":
                        return _context52.stop();
                    }
                  }
                }, _callee52);
              }));

              return function (_x17) {
                return _ref53.apply(this, arguments);
              };
            }());

          case 2:
            _this.categories = _context59.sent;
            _context59.next = 5;
            return _schemas.Post.estimatedDocumentCount().exec().then(
            /*#__PURE__*/
            function () {
              var _ref54 = (0, _asyncToGenerator2.default)(
              /*#__PURE__*/
              _regenerator.default.mark(function _callee53(count) {
                return _regenerator.default.wrap(function _callee53$(_context53) {
                  while (1) {
                    switch (_context53.prev = _context53.next) {
                      case 0:
                        if (!(count === 0)) {
                          _context53.next = 3;
                          break;
                        }

                        _context53.next = 3;
                        return _this.createPosts();

                      case 3:
                        return _context53.abrupt("return", _schemas.Post.find().exec());

                      case 4:
                      case "end":
                        return _context53.stop();
                    }
                  }
                }, _callee53);
              }));

              return function (_x18) {
                return _ref54.apply(this, arguments);
              };
            }());

          case 5:
            _this.posts = _context59.sent;
            _context59.next = 8;
            return _schemas.Blog.estimatedDocumentCount().exec().then(
            /*#__PURE__*/
            function () {
              var _ref55 = (0, _asyncToGenerator2.default)(
              /*#__PURE__*/
              _regenerator.default.mark(function _callee54(count) {
                return _regenerator.default.wrap(function _callee54$(_context54) {
                  while (1) {
                    switch (_context54.prev = _context54.next) {
                      case 0:
                        if (!(count === 0)) {
                          _context54.next = 3;
                          break;
                        }

                        _context54.next = 3;
                        return _this.createBlogs();

                      case 3:
                        return _context54.abrupt("return", _schemas.Blog.find().exec());

                      case 4:
                      case "end":
                        return _context54.stop();
                    }
                  }
                }, _callee54);
              }));

              return function (_x19) {
                return _ref55.apply(this, arguments);
              };
            }());

          case 8:
            _this.blogs = _context59.sent;
            _context59.next = 11;
            return _schemas.User.estimatedDocumentCount().exec().then(
            /*#__PURE__*/
            function () {
              var _ref56 = (0, _asyncToGenerator2.default)(
              /*#__PURE__*/
              _regenerator.default.mark(function _callee55(count) {
                return _regenerator.default.wrap(function _callee55$(_context55) {
                  while (1) {
                    switch (_context55.prev = _context55.next) {
                      case 0:
                        if (!(count === 0)) {
                          _context55.next = 3;
                          break;
                        }

                        _context55.next = 3;
                        return _this.createUsers();

                      case 3:
                        return _context55.abrupt("return", _schemas.User.find().exec());

                      case 4:
                      case "end":
                        return _context55.stop();
                    }
                  }
                }, _callee55);
              }));

              return function (_x20) {
                return _ref56.apply(this, arguments);
              };
            }());

          case 11:
            _this.users = _context59.sent;
            _context59.next = 14;
            return _schemas.Company.estimatedDocumentCount().exec().then(
            /*#__PURE__*/
            function () {
              var _ref57 = (0, _asyncToGenerator2.default)(
              /*#__PURE__*/
              _regenerator.default.mark(function _callee56(count) {
                return _regenerator.default.wrap(function _callee56$(_context56) {
                  while (1) {
                    switch (_context56.prev = _context56.next) {
                      case 0:
                        if (!(count === 0)) {
                          _context56.next = 3;
                          break;
                        }

                        _context56.next = 3;
                        return _this.createCompanies();

                      case 3:
                        return _context56.abrupt("return", _schemas.Company.find().exec());

                      case 4:
                      case "end":
                        return _context56.stop();
                    }
                  }
                }, _callee56);
              }));

              return function (_x21) {
                return _ref57.apply(this, arguments);
              };
            }());

          case 14:
            _this.companies = _context59.sent;
            _context59.next = 17;
            return _schemas.Order.estimatedDocumentCount().exec().then(
            /*#__PURE__*/
            function () {
              var _ref58 = (0, _asyncToGenerator2.default)(
              /*#__PURE__*/
              _regenerator.default.mark(function _callee57(count) {
                return _regenerator.default.wrap(function _callee57$(_context57) {
                  while (1) {
                    switch (_context57.prev = _context57.next) {
                      case 0:
                        if (!(count === 0)) {
                          _context57.next = 3;
                          break;
                        }

                        _context57.next = 3;
                        return _this.createOrders();

                      case 3:
                        return _context57.abrupt("return", _schemas.Order.find().exec());

                      case 4:
                      case "end":
                        return _context57.stop();
                    }
                  }
                }, _callee57);
              }));

              return function (_x22) {
                return _ref58.apply(this, arguments);
              };
            }());

          case 17:
            _this.orders = _context59.sent;
            _context59.next = 20;
            return _schemas.Museum.estimatedDocumentCount().exec().then(
            /*#__PURE__*/
            function () {
              var _ref59 = (0, _asyncToGenerator2.default)(
              /*#__PURE__*/
              _regenerator.default.mark(function _callee58(count) {
                return _regenerator.default.wrap(function _callee58$(_context58) {
                  while (1) {
                    switch (_context58.prev = _context58.next) {
                      case 0:
                        if (!(count === 0)) {
                          _context58.next = 3;
                          break;
                        }

                        _context58.next = 3;
                        return _this.createMusea();

                      case 3:
                        return _context58.abrupt("return", _schemas.Museum.find().exec());

                      case 4:
                      case "end":
                        return _context58.stop();
                    }
                  }
                }, _callee58);
              }));

              return function (_x23) {
                return _ref59.apply(this, arguments);
              };
            }());

          case 20:
            _this.musea = _context59.sent;

          case 21:
          case "end":
            return _context59.stop();
        }
      }
    }, _callee59);
  })));
  this.blogs = [];
  this.categories = [];
  this.posts = [];
  this.users = [];
  this.companies = [];
  this.order = [];
  this.musea = [];
};

var _default = Seeder;
exports.default = _default;