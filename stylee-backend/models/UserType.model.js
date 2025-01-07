const mongoose = require('mongoose');
const userTypeSchema = new mongoose.Schema({
    type_id: {
        type: mongoose.Schema.Types.ObjectId,
        alias:'_id'
    },
    role_type: {
        type: String,
        required: true,
        unique: true
    }
}, {timestamps: true})
module.exports =mongoose.model('UserType', userTypeSchema)