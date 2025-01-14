const express = require("express");
const userTypeRouter = express.Router();
const {authorizeRole} = require('../utilities/authentication.utili')
const userTypeController = require('../controllers/userType.controller');
userTypeRouter.post("/createUserType", authorizeRole("Admin"), userTypeController.createUserType);
userTypeRouter.get("/showUserType", authorizeRole("Admin"), userTypeController.showUSerTypes);
userTypeRouter.delete("/deleteUserType", authorizeRole("Admin"), userTypeController.deleteUserType);
module.exports = userTypeRouter