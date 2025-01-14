const express = require('express');
const productCategoryRouter = express.Router();
const productCategoryController = require('../controllers/productCategory.controller');
const {authorizeRole} = require('../utilities/authentication.utili')
productCategoryRouter.post('/createProductCategory', authorizeRole("Admin"), productCategoryController.createProductCategory);
productCategoryRouter.get('/showAllCategories', productCategoryController.showAllCategories);
productCategoryRouter.delete('/deleteProductCategory', authorizeRole("Admin"), productCategoryController.deleteProductCategory);
module.exports = productCategoryRouter;