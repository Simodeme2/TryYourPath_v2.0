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
    Company,
} from '../database';

import { APIError, handleAPIError } from '../../../utilities';

class CompanyController {
    // List all the models
    index = async (req, res, next) => {
        try {
            const { limit, skip } = req.query;
            let companies = null;
            if (limit && skip) {
                const options = {
                    page: parseInt(skip, 10) || 1,
                    limit: parseInt(limit, 10) || 10,
                    sort: { created_at: -1 },
                };
                companies = await Company.paginate({}, options);
            } else {
                companies = await Company.find().sort({ created_at: -1 }).exec();
            }

            if (companies === undefined || companies === null) {
                throw new APIError(404, 'Collection for categories not found!');
            }
            return res.status(200).json(companies);
        } catch (err) {
            return handleAPIError(500, err.message || 'Some error occurred while retrieving companies', next);
        }
    };

    // Show specific model by id
    show = async (req, res, next) => {
        try {
            const { id } = req.params;
            const item = await Company.findById(id).exec();
            if (item === undefined || item === null) {
                throw new APIError(404, `Company with id: ${id} not found!`);
            }
            return res.status(200).json(item);
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || 'Some error occurred while retrieving companies', next);
        }
    }

    // ViewModel for Insert / Create
    create = (req, res) => {
        const vm = {
            companies: [],
        };
        return res.status(200).json(vm);
    }

    // Store / Create the new model
    store = async (req, res, next) => {
        try {
            const companyCreate = new Company({
                title: req.body.title,
                synopsis: req.body.synopsis,
                body: req.body.body,
            });
            const company = await companyCreate.save();
            return res.status(201).json(company);
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || 'Some error occurred while saving the Company!', next);
        }
    }

    // ViewModel for Edit / Update
    edit = async (req, res, next) => {
        const { id } = req.params;

        try {
            const company = await Company.findById(id).exec();

            if (!company) {
                throw new APIError(404, `Category with id: ${id} not found!`);
            } else {
                const vm = {
                    company,
                    companies: [],
                };
                return res.status(200).json(vm);
            }
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || `Some error occurred while deleting the Company with id: ${id}!`, next);
        }
    }

    // Update the model
    update = async (req, res, next) => {
        const { id } = req.params;

        try {
            const companyUpdate = req.body;
            const company = await Company.findOneAndUpdate(
                { _id: id }, companyUpdate, { new: true },
            )
                .exec();

            if (!company) {
                throw new APIError(404, `Category with id: ${id} not found!`);
            }
            return res.status(200).json(company);
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || `Some error occurred while deleting the Company with id: ${id}!`, next);
        }
    }

    // Delete / Destroy the model
    destroy = async (req, res, next) => {
        const { id } = req.params;

        try {
            const company = await Company.findOneAndRemove({ _id: id });

            if (!company) {
                throw new APIError(404, `Company with id: ${id} not found!`);
            } else {
                return res.status(200).json({ message: `Successful deleted the Company with id: ${id}!` });
            }
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || `Some error occurred while deleting the Company with id: ${id}!`, next);
        }
    }
}

export default CompanyController;
