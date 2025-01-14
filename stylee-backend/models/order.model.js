const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    order_id: {
        type: mongoose.Schema.Types.ObjectId,
        alias: '_id'
    },
    order_status: {
        type: String,
        enum: ['in-cart', 'pending', 'in-fulfillment', 'shipped', 'delivered', 'cancelled'],
        required: true
    },
    total: {
        type: Number,
        required: true,

    },
    user_ref: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',

    }

}, {timestamps: true}) //data will be managed by timestamps.
module.exports = mongoose.model('Order', orderSchema);