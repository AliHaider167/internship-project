const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(`${process.env.DB_URL}employee`)
  .then(function () {
    console.log("Database connected successfully");
  })
  .catch(function (err) {
    console.log(err);
  });

module.exports = mongoose;
