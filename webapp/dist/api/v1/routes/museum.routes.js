"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _controller = require("../controller");

/*
Import the internal libraries:
- MuseumController
*/
// Create instance of MuseumController otherwise you can't use it
var museumController = new _controller.MuseumController();

var initializeEndpoints = function initializeEndpoints(parentRouter, authService) {
  /**
   * @swagger
   * /api/v1/musea:
   *   get:
   *     tags:
   *       - Musea
   *     description: Returns all musea
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: An array of musea
   */
  parentRouter.get('/musea', museumController.index);
  /**
   * @swagger
   * /api/v1/musea/create:
   *   get:
   *     tags:
   *       - Museum
   *     description: Returns specific viewmodel such as musea
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: Create post
   */

  parentRouter.get('/musea/create/', museumController.create);
  /**
   * @swagger
   * /api/v1/musea/{id}:
   *   get:
   *     tags:
   *       - Museum
   *     description: Returns specific post
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: id
   *         description: Museum id
   *         in: path
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         description: Get post by id
   */

  parentRouter.get('/musea/:id', museumController.show);
  /**
   * @swagger
   * /api/v1/musea:
   *   post:
   *     tags:
   *       - Museum
   *     description: Save post
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: post
   *         description: Museum object
   *         in: body
   *         required: true
   *     responses:
   *       200:
   *         description: Return saved post
   */

  parentRouter.post('/musea', museumController.store);
  /**
   * @swagger
   * /api/v1/musea/{id}/edit:
   *   get:
   *     tags:
   *       - Museum
   *     description: Returns specific viewmodel such as post, musea
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: id
   *         description: Museum id
   *         in: path
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         description: Edit museum by id
   */

  parentRouter.get('/musea/:id/edit', museumController.edit);
  /**
   * @swagger
   * /api/v1/musea/{id}:
   *   put:
   *     tags:
   *       - Museum
   *     description: Update specific post detail
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: id
   *         description: Museum id
   *         in: path
   *         required: true
   *         type: string
   *       - name: nlog object
   *         description: museum data
   *         in: body
   *         required: true
   *     responses:
   *       200:
   *         description: Update museum
   */

  parentRouter.put('/musea/:id', museumController.update);
  /**
   * @swagger
   * /api/v1/musea/{id}:
   *   delete:
   *     tags:
   *       - Museum
   *     description: Delete specific museum
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: id
   *         description: Museum id
   *         in: path
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         description: Delete museum
   */

  parentRouter.delete('/musea/:id', museumController.destroy);
};

var _default = initializeEndpoints;
exports.default = _default;