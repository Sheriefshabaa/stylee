const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log(`database is connected at PORT: ${process.env.DB_PORT}`);
    } catch (err) {
        console.log(err.message);
    }
}
module.exports = connectDB;