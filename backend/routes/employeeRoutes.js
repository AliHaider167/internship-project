const express = require("express");
const router = express.Router();
const {
  createEmployee,
  getEmployee,
} = require("../controllers/employeeController");

//function for creating users in db
router.post("/", createEmployee);

//Routes to return all employees
router.get("/", getEmployee);

module.exports = router;