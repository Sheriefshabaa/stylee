const mongoose = require('mongoose');
const OrderItemSchema = new mongoose.Schema({
    product_ref: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    order_ref: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        required: true
    },
    item_quantity: {
        type: Number,
        required: true,
        default: 1
    },
    item_price: {
        type: Number,
        required: true
    }
}, {timestamps: true})