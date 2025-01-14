const productCategoryModel = require('../models/productCategory.model');

/**
 * Create a new product category.
 *
 * @param {Object} req - The request object.
 * @param {Object} req.body - The body of the request containing the new product category data.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves to void.
 */
exports.createProductCategory = async (req, res) => {
    try {
        const newProductCategory = await productCategoryModel.create(req.body);
        if (!newProductCategory) { // validate the body of the request
            res.status(503).json({Message: "Unable to load data from request body"})
        }
        res.status(201).json(newProductCategory);

    } catch (err) {
        res.status(500).json({Message: err.message})

    }
}
/**
 * Show all product categories.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves to void.
 */
exports.showAllCategories = async (req, res) => {
    try {
        const allCategories = await productCategoryModel.find({}).lean();
        if (!allCategories) {
            res.status(503).json({Message: "Unable to load data from request body"})
        }
        res.status(200).json(allCategories);
    } catch (err) {
        res.status(500).json({Message: err.message})
    }
}

/**
 * Delete a product category.
 *
 * @param {Object} req - The request object.
 * @param {Object} req.body - The body of the request containing the category name to delete.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves to void.
 */
exports.deleteProductCategory = async (req, res) => {
    try {
        const deletedCategory = await productCategoryModel.findOneAndDelete({category_name: req.body.category_name}).lean();
        if (!deletedCategory) {
            res.status(503).json({Message: "Unable to load data from request body"})
        }
        res.status(204).json(deletedCategory);
    } catch (err) {
        res.status(500).json({Error: err.message})
    }
}

