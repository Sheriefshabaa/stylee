const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/user.controller');
const {authenticatingUser} = require('../utilities/authentication.utili')
userRouter.post('/register', userController.registerUser);
userRouter.post('/login', userController.login);
module.exports = userRouter;