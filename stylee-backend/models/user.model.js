const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        alias: '_id'
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: { //this needs validation
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserType',
        required: true
    }

})
module.exports = mongoose.model('User', userSchema)