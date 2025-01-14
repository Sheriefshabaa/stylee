const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/user.controller');
userRouter.post('/register', userController.registerUser);
userRouter.post('/registerAdmin', userController.register);
userRouter.post('/login', userController.login);
module.exports = userRouter;