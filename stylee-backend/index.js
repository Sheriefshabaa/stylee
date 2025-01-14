// Main Configs
require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const cors = require('cors');
const connectDB = require('./config/db.config');
//routers declaration
const userTypeRouter = require('./routers/userType.router');
const userRouter = require('./routers/user.router');
const productCategoryRouter = require('./routers/productCategory.router');
const productSubCategoryRouter = require('./routers/productSubCategory.router');
// Data Transmission Configs
/*Database Connection Initialization*/
connectDB();
/*configure all data as json*/
app.use(express.json())
/*cross-origin management*/
app.use(cors({
    origin: process.env.FRONT_URI
}))
//setup routers
app.use('/userType', userTypeRouter);
app.use('/user', userRouter);
app.use('/productCategory', productCategoryRouter);
app.use('/productSub-category', productSubCategoryRouter);


// Port Listening Configs for back-end server:
app.listen(port, () => {
    console.log(`back-end is running at port: ${port}`);
})