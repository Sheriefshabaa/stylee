const mongoose = require('mongoose');
const productCategorySchema = new mongoose.Schema({
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        alias: '_id'
    },
    category_name: {
        type: String,
        required: true,
        unique: true
    }
}, {timestamps: true})
module.exports = mongoose.model('ProductCategory', productCategorySchema);
