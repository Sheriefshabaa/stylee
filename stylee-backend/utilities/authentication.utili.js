const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY;

exports.generateAccessToken = (data) => {
    return jwt.sign(data, secretKey, {expiresIn: '1h'})
}

exports.authenticatingUser = (req, res, next) => {
    try {
        const validToken = req.header('Authorization')?.replace('Bearer ', '');
        if (validToken) {
            const verified = jwt.verify(validToken, secretKey);
            req.user = verified;
            next();
        } else {
            res.status(401).json({error: 'Access denied, token missing'})
        }
    } catch (err) {
        res.status(401).json({error: err.message})
    }
}