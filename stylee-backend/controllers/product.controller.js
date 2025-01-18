const productModel = require('../models/product.model');

// Function to create a new product
exports.createProduct = async (req, res) => {
    try {
        console.log(req.file.filename)
        req.body.product_image_uri = req.file.filename;
        const newProduct = await productModel.create(req.body);
        console.log(req.body.product_image_uri);
        res.status(201).json({message: 'Product created successfully', product: newProduct});
    } catch (error) {
        res.status(500).json({message: 'Server error', error: error.message});
    }
};


// Function to modify the status of is_deleted and reset stock_items_count
exports.markProductAsDeleted = async (req, res) => {
    try {
        const productName = req.params.name;
        const product = await productModel.findOne({product_name: productName});

        if (!product) {
            return res.status(404).json({message: 'Product not found'});
        }

        product.is_deleted = true;
        product.stock_items_count = 0;
        await product.save();
        res.status(200).json({message: 'Product marked as deleted and stock count reset', product});
    } catch (error) {
        res.status(500).json({message: 'Server error', error});
    }
};

// Function to change the status of is_active to false when stock_items_count reaches zero
exports.deactivateProductIfOutOfStock = async (req, res) => {
    try {
        const productName = req.params.name;
        const product = await productModel.findOne({product_name: productName});

        if (!product) {
            return res.status(404).json({message: 'Product not found'});
        }

        if (product.stock_items_count === 0) {
            product.is_active = false;
            await product.save();
            res.status(200).json({message: 'Product deactivated due to zero stock', product});
        } else {
            res.status(200).json({message: 'Product is still in stock', product});
        }
    } catch (error) {
        res.status(500).json({message: 'Server error', error});
    }
};

// Function to set is_in_stock to false but keep all other info of the product
exports.markProductAsOutOfStock = async (req, res) => {
    try {
        const productName = req.params.name;
        const product = await productModel.findOne({product_name: productName});

        if (!product) {
            return res.status(404).json({message: 'Product not found'});
        }

        product.is_in_stock = false;

        await product.save();
        res.status(200).json({message: 'Product marked as out of stock', product});
    } catch (error) {
        res.status(500).json({message: 'Server error', error});
    }
};
// Function to change the stock_items_count of a product
exports.updateStockItemsCount = async (req, res) => {
    try {
        const productName = req.params.name;
        const newStockCount = req.body.stock_items_count;
        const product = await productModel.findOne({product_name: productName});

        if (!product) {
            return res.status(404).json({message: 'Product not found'});
        }

        product.stock_items_count = newStockCount;

        await product.save();
        res.status(200).json({message: 'Stock items count updated', product});
    } catch (error) {
        res.status(500).json({message: 'Server error', error});
    }
};
