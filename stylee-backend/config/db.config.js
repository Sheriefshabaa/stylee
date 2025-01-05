const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('database connected');
    } catch (err) {
        console.log(err.message);
    }
}
module.exports = connectDB;