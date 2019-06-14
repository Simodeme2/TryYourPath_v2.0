"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _controller = require("../controller");

/*
Import the internal libraries:
- CategoryController
*/
// Create instance of CategoryController otherwise you can't use it
var companyController = new _controller.CompanyController(); // authService -> can be used as parameter

var initializeEndpoints = function initializeEndpoints(parentRouter) {
  /**
   * @swagger
   * /api/v1/categories:
   *   get:
   *     tags:
   *       - Categories
   *     description: Returns all categories
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: An array of categories
   */
  parentRouter.get('/companies', companyController.index);
  /**
   * @swagger
   * /api/v1/categories/create:
   *   get:
   *     tags:
   *       - Category
   *     description: Returns specific viewmodel such as categories
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: Create post
   */

  parentRouter.get('/companies/create/', companyController.create);
  /**
   * @swagger
   * /api/v1/categories/{id}:
   *   get:
   *     tags:
   *       - Category
   *     description: Returns specific post
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: id
   *         description: Category id
   *         in: path
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         description: Get post by id
   */

  parentRouter.get('/companies/:id', companyController.show);
  /**
   * @swagger
   * /api/v1/categories:
   *   post:
   *     tags:
   *       - Category
   *     description: Save post
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: post
   *         description: Category object
   *         in: body
   *         required: true
   *     responses:
   *       200:
   *         description: Return saved post
   */

  parentRouter.post('/companies', companyController.store);
  /**
   * @swagger
   * /api/v1/categories/{id}/edit:
   *   get:
   *     tags:
   *       - Category
   *     description: Returns specific viewmodel such as post, categories
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: id
   *         description: Category id
   *         in: path
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         description: Edit post by id
   */

  parentRouter.get('/companies/:id/edit', companyController.edit);
  /**
   * @swagger
   * /api/v1/categories/{id}:
   *   put:
   *     tags:
   *       - Category
   *     description: Update specific post detail
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: id
   *         description: Category id
   *         in: path
   *         required: true
   *         type: string
   *       - name: post object
   *         description: post data
   *         in: body
   *         required: true
   *     responses:
   *       200:
   *         description: Update post
   */

  parentRouter.put('/companies/:id', companyController.update);
  /**
   * @swagger
   * /api/v1/categories/{id}:
   *   delete:
   *     tags:
   *       - Category
   *     description: Delete specific post detail
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: id
   *         description: Category id
   *         in: path
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         description: Delete post
   */

  parentRouter.delete('/companies/:id', companyController.destroy);
};

var _default = initializeEndpoints;
exports.default = _default;