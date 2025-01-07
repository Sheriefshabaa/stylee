const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        alias: '_id'
    },
    product_name: {
        type: String,
        unique: true,
        required: true
    },
    product_price: {
        type: Number,
        required: true,
    },
    stock_items_count: {
        type: Number,
        required: true,
    },
    is_deleted: {
        type: Boolean,
        required: true,
        default: false
    },
    is_active: {
        type: Boolean,
        required: true,
        default: true
    },
    is_in_stock: {
        type: Boolean,
        required: true,
        default: true
    },
    product_image_uri: {
        type: String,
        required: true
    },
    category_ref: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductCategory',
        required: true
    },
    sub_category_ref: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductSubCategory',
        required: true
    }

}, {timestamps: true})
module.exports = mongoose.model('Product', productSchema);