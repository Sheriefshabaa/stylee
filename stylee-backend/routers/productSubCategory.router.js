const express = require('express');
const productSubCategoryRouter = express.Router();
const subCategoryController = require('../controllers/productSubCategory.controller');
const {uploadProductSubCategoryImage} = require('../config/multer.config');
const {authorizeRole} = require('../utilities/authentication.utili')
productSubCategoryRouter.post('/createProductSub-category', authorizeRole('Admin'),
    uploadProductSubCategoryImage.single('sub_category_image'), subCategoryController.createSubCategory);

productSubCategoryRouter.get('/showAllSubCategories', subCategoryController.showAllSubCategories);
productSubCategoryRouter.delete('/deleteProductSubCategory', authorizeRole('Admin'), subCategoryController.deleteSubCategory);

module.exports = productSubCategoryRouter;