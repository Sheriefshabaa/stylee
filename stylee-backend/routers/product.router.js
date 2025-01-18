const express = require('express');
const productRouter = express.Router();
const productController = require('../controllers/product.controller');
const {authorizeRole} = require('../utilities/authentication.utili');
const {uploadProductImage} = require('../config/multer.config')

// Route to create a new product
productRouter.post('/create', authorizeRole('Admin'), productController.createProduct,
    uploadProductImage.single('product_image_uri'));

// Route to mark a product as deleted and reset stock count
productRouter.put('/mark-as-deleted/:name', authorizeRole('Admin'), productController.markProductAsDeleted);

// Route to deactivate a product if out of stock
productRouter.put('/deactivate-if-out-of-stock/:name', authorizeRole('Admin'), productController.deactivateProductIfOutOfStock);

// Route to mark a product as out of stock
productRouter.put('/mark-as-out-of-stock/:name', authorizeRole('Admin'), productController.markProductAsOutOfStock);

// Route to update the stock items count of a product
productRouter.put('/update-stock/:name', authorizeRole('Admin'), productController.updateStockItemsCount);

// Route to get all products
productRouter.get('/all', productController.getAllProducts);

module.exports = productRouter;