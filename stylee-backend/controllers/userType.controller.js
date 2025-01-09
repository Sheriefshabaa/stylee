// Database instance to handle the requests
const userTypeModel = require('../models/UserType.model');

/**
 * CreateUserType: an endpoint function that allows the @admin to create a type for users to manage authorization,
 * {validation}: not applied yet!
 */
exports.createUserType = async (req, res) => {
    try {
        const newType = await userTypeModel.create(req.body);
        res.status(201).json(newType);

    } catch (err) {
        res.status(500).json({error: err.message, Notes: "Couldn't create Object"});
    }

}


/**
 * A dedicated page is required to show all Types then we can add or delete type from the same page
 * ShowUserTypes: an endpoint function that allows the @admin to __see__ a type for users to manage authorization,
 * {validation}: not applied yet!
 */
exports.showUSerTypes = async (req, res) => {
    try {
        const allUserTypes = await userTypeModel.find({});
        res.status(200).json(allUserTypes);
    } catch (err) {
        res.status(500).json({error: err.message, notes: "Couldn't show any objects"});
    }

}

/**
 * This will be an action in the page that manages types,
 * ShowUserTypes: an endpoint function that allows the @admin to __delete__ a type for users to manage authorization,
 * {validation}: not applied yet!
 */
exports.deleteUserType = async (req, res) => {
    try {
        const deletedType = await userTypeModel.findOneAndDelete({role_type: req.body.role_type});
        res.status(200).json(deletedType);

    } catch (err) {
        res.status(500).json({error: err.message});


    }
}
