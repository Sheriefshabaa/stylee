const bcrypt = require('bcrypt');
const saltRounds = 10;
exports.hashPassword = async (password) => {
    if (!password) {
        throw new Error('Password is missing');
    }
    try {
        const saltRounds = 10; // Adjust as needed
        const hashed = await bcrypt.hash(password, saltRounds);
        return hashed;
    } catch (error) {
        throw new Error('Error hashing the password: ' + error.message);
    }
};


exports.isMatch = async (password, savedPassword) => {
    return await bcrypt.compare(password, savedPassword);
}