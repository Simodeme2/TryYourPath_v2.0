/*
Import the external libraries:
- uuidv4
*/

/*
Import the internal libraries:
- * from database
- errorHandler
*/
import {
    Order,
} from '../database';

import { APIError, handleAPIError } from '../../../utilities';

class OrderController {
    // List all the models
    index = async (req, res, next) => {
        try {
            const { limit, skip } = req.query;
            let orders = null;
            if (limit && skip) {
                const options = {
                    page: parseInt(skip, 10) || 1,
                    limit: parseInt(limit, 10) || 10,
                    sort: { created_at: -1 },
                };
                orders = await Order.paginate({}, options);
            } else {
                orders = await Order.find().sort({ created_at: -1 }).exec();
            }

            if (orders === undefined || orders === null) {
                throw new APIError(404, 'Collection for categories not found!');
            }
            return res.status(200).json(orders);
        } catch (err) {
            return handleAPIError(500, err.message || 'Some error occurred while retrieving orders', next);
        }
    };

    // Show specific model by id
    show = async (req, res, next) => {
        try {
            const { id } = req.params;
            const item = await Order.findById(id).exec();
            if (item === undefined || item === null) {
                throw new APIError(404, `Order with id: ${id} not found!`);
            }
            return res.status(200).json(item);
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || 'Some error occurred while retrieving orders', next);
        }
    }

    // ViewModel for Insert / Create
    create = (req, res) => {
        const vm = {
            orders: [],
        };
        return res.status(200).json(vm);
    }

    // Store / Create the new model
    store = async (req, res, next) => {
        try {
            const orderCreate = new Order({
                title: req.body.title,
                synopsis: req.body.synopsis,
                body: req.body.body,
            });
            const order = await orderCreate.save();
            return res.status(201).json(order);
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || 'Some error occurred while saving the Order!', next);
        }
    }

    // ViewModel for Edit / Update
    edit = async (req, res, next) => {
        const { id } = req.params;

        try {
            const order = await Order.findById(id).exec();

            if (!order) {
                throw new APIError(404, `Category with id: ${id} not found!`);
            } else {
                const vm = {
                    order,
                    orders: [],
                };
                return res.status(200).json(vm);
            }
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || `Some error occurred while deleting the Order with id: ${id}!`, next);
        }
    }

    // Update the model
    update = async (req, res, next) => {
        const { id } = req.params;

        try {
            const orderUpdate = req.body;
            const order = await Order.findOneAndUpdate(
                { _id: id }, orderUpdate, { new: true },
            )
                .exec();

            if (!order) {
                throw new APIError(404, `Category with id: ${id} not found!`);
            }
            return res.status(200).json(order);
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || `Some error occurred while deleting the Order with id: ${id}!`, next);
        }
    }

    // Delete / Destroy the model
    destroy = async (req, res, next) => {
        const { id } = req.params;

        try {
            const order = await Order.findOneAndRemove({ _id: id });

            if (!order) {
                throw new APIError(404, `Order with id: ${id} not found!`);
            } else {
                return res.status(200).json({ message: `Successful deleted the Order with id: ${id}!` });
            }
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || `Some error occurred while deleting the Order with id: ${id}!`, next);
        }
    }
}

export default OrderController;
