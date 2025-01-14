const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY;

exports.generateAccessToken = (data) => {
    return jwt.sign(data, secretKey, {expiresIn: '24h'})
}
/**
* Middleware function to authorize user roles.
*
* @param {string} requiredRole - The role required to access the endpoint.
* @returns {function} Middleware function to handle role-based authorization.
*/
exports.authorizeRole = (requiredRole) => {
    return (req, res, next) => {
        try {
            const isValidToken = req.header('Authorization')?.replace('Bearer ', '');
            if (!isValidToken) {
                return res.status(401).json({error: 'Access denied, token missing'});
            }
            // by using the verify() method, we can decode the access token back to its original format.
            const verifiedUser = jwt.verify(isValidToken, secretKey);
            if (verifiedUser.userType !== requiredRole) {
                return res.status(403).json({error: 'Access denied, insufficient permissions'});
            }
            req.user = verifiedUser;
            next();
        } catch (err) {
            res.status(401).json({error: err.message})
        }
    }
}