const express = require("express");
const Router = express.Router();
const axios = require("axios");

const payment = require("./paymentRouter");

Router.use("/payment", payment);
// Router.use("");

module.exports = Router;