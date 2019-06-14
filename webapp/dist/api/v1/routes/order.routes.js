"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _controller = require("../controller");

/*
Import the internal libraries:
- OrderController
*/
// Create instance of OrderController otherwise you can't use it
var orderController = new _controller.OrderController();

var initializeEndpoints = function initializeEndpoints(parentRouter, authService) {
  /**
   * @swagger
   * /api/v1/orders:
   *   get:
   *     tags:
   *       - Orders
   *     description: Returns all orders
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: An array of orders
   */
  parentRouter.get('/orders', orderController.index);
  /**
   * @swagger
   * /api/v1/orders/create:
   *   get:
   *     tags:
   *       - Order
   *     description: Returns specific viewmodel such as orders
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: Create post
   */

  parentRouter.get('/orders/create/', orderController.create);
  /**
   * @swagger
   * /api/v1/orders/{id}:
   *   get:
   *     tags:
   *       - Order
   *     description: Returns specific post
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: id
   *         description: Order id
   *         in: path
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         description: Get post by id
   */

  parentRouter.get('/orders/:id', orderController.show);
  /**
   * @swagger
   * /api/v1/orders:
   *   post:
   *     tags:
   *       - Order
   *     description: Save post
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: post
   *         description: Order object
   *         in: body
   *         required: true
   *     responses:
   *       200:
   *         description: Return saved post
   */

  parentRouter.post('/orders', orderController.store);
  /**
   * @swagger
   * /api/v1/orders/{id}/edit:
   *   get:
   *     tags:
   *       - Order
   *     description: Returns specific viewmodel such as post, orders
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: id
   *         description: Order id
   *         in: path
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         description: Edit order by id
   */

  parentRouter.get('/orders/:id/edit', orderController.edit);
  /**
   * @swagger
   * /api/v1/orders/{id}:
   *   put:
   *     tags:
   *       - Order
   *     description: Update specific post detail
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: id
   *         description: Order id
   *         in: path
   *         required: true
   *         type: string
   *       - name: nlog object
   *         description: order data
   *         in: body
   *         required: true
   *     responses:
   *       200:
   *         description: Update order
   */

  parentRouter.put('/orders/:id', orderController.update);
  /**
   * @swagger
   * /api/v1/orders/{id}:
   *   delete:
   *     tags:
   *       - Order
   *     description: Delete specific order
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: id
   *         description: Order id
   *         in: path
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         description: Delete order
   */

  parentRouter.delete('/orders/:id', orderController.destroy);
};

var _default = initializeEndpoints;
exports.default = _default;