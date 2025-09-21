const express = require("express");
const db = require("./config/databaseConfiguration");
const employeeRoutes = require("./routes/employeeRoutes");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: process.env.CORS_ORIGIN }));

app.use("/employee", employeeRoutes);

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
