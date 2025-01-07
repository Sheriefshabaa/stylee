const mongoose = require('mongoose');
const productSubCategorySchema = new mongoose.Schema({
    sub_category_id: {
        type: mongoose.Schema.Types.ObjectId,
        alias: '_id'
    },
    sub_category_name: {
        type: String,
        required: true,
        unique: true
    }
}, {timestamps: true})
module.exports = mongoose.model('ProductSubCategory',productSubCategorySchema);