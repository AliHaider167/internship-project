const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
  id: String,
  access_level: Number,
  request_time: String,
  room: String,
});

module.exports = mongoose.model("employee", employeeSchema);
