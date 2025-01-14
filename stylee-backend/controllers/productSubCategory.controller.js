const productSubCategoryModel = require('../models/productSubCategory.model');
const {deleteImage} = require("../config/imageDelete.config");
/**
 * Create Sub-category
 * Delete Sub-category
 * Get sub-categories
 *
 */

exports.createSubCategory = async (req, res) => {
    try {
        req.body.sub_category_image = req.file.filename;
        console.log(req.body.sub_category_image);
        const createdSubCategory = await productSubCategoryModel.create(req.body);
        if (!createdSubCategory) {
            res.status(503).json({Message: "We couldn't load the request."});
        }
        res.status(201).json(createdSubCategory);
    } catch (err) {
        res.status(500).json({Error: err.message})
    }

}

exports.showAllSubCategories = async (req, res) => {
    try {
        const allCategories = await productSubCategoryModel.find({}).lean();
        if (!allCategories) {
            console.error("No subcategories found!")
            res.status(404).json({Error: "No subcategories found!"});
        }
        res.status(200).json(allCategories);
    } catch (err) {
        res.status(500).json({Error: err.message});
    }
}

exports.deleteSubCategory = async (req, res) => {
    try {
        const deletedSubCategory = await productSubCategoryModel.findOneAndDelete({sub_category_name: req.body.sub_category_name}).lean();
        if (!deletedSubCategory) {
            res.status(404).json({Error: "Sub-category not found"});
        }
        deleteImage('subCategories', deletedSubCategory.sub_category_image);
        res.status(204).json({deletedSubCategory});

    } catch (err) {
        res.status(500).json({Error: err.message})
    }

}