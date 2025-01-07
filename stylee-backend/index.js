// Main Configs
require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const cors = require('cors');
const connectDB = require('./config/db.config')
// Data Transmission Configs
/*Database Connection Initialization*/
connectDB();
/*configure all data as json*/
app.use(express.json())
/*cross-origin management*/
app.use(cors({
    origin: process.env.FRONT_URI
}))
// Port Listening Configs for back-end server:
app.listen(port, () => {
    console.log(`back-end is running at port: ${port}`);
})