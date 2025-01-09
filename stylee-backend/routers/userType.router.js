const express = require("express");
const userTypeRouter = express.Router();
const userTypeController = require('../controllers/userType.controller');
userTypeRouter.post("/createUserType", userTypeController.createUserType);
userTypeRouter.get("/showUserType", userTypeController.showUSerTypes);
userTypeRouter.delete("/deleteUserType", userTypeController.deleteUserType);
module.exports = userTypeRouter