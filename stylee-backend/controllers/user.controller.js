// Database Instance for userScheme,
const userModel = require('../models/user.model');
const userTypeModel = require('../models/user.model');
const {hashPassword, isMatch} = require('../utilities/hashing.utili');
const {generateAccessToken} = require("../utilities/authentication.utili");

exports.registerUser = async (req, res) => {
    try {
        //to prevent the creation of non-existed types.
        req.body.userType = process.env.CLIENT_TYPE;
        const hashedPassword = await hashPassword(req.body.password);
        // console.log(req.body.password); - left for debugging
        req.body.password = hashedPassword;
        // console.log(hashedPassword); - left for debugging
        const createdUser = await userModel.create(req.body);
        res.status(201).json(createdUser);
    } catch (err) {
        res.status(500).json(({error: err.message}))
    }

}
//TODO: In the front, I shall to make sure that the sent data contains an Object ID, I will embed them in the .env file
exports.register = async (req, res) => { // for Admins
    try {
        //to prevent the creation of non-existed types.
        const hashedPassword = await hashPassword(req.body.password);
        // console.log(req.body.password); - left for debugging
        req.body.password = hashedPassword;
        // console.log(hashedPassword); - left for debugging
        const createdUser = await userModel.create(req.body);
        res.status(201).json(createdUser);
    } catch (err) {
        res.status(500).json(({error: err.message}))
    }

}

exports.login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const loggedInUser = userModel.findOne({email}).populate('UserType');
        if (loggedInUser) {
            const hasValidCredentials = await isMatch(password, loggedInUser.password);
            console.log("Things worked fine - Pt.1");
            if (hasValidCredentials) {
                const userToken = generateAccessToken({
                    user_id: loggedInUser.user_id,
                    userType: loggedInUser.userType.role_type,
                    first_name: loggedInUser.first_name,
                });
                console.log("Things worked fine - Pt.2");
                res.status(200).json({Access_token: userToken})
            } else {
                res.status(401).json({Error: "Invalid Credentials, please correct username and password"});
            }

        } else {
            res.status(404).json({Error: "There's no such credentials, wanna signup?"});
        }

    } catch
        (err) {
        res.status(500).json({Error: `Operation Login Failed, + ${err.message}`})
    }
}