const { get } = require("mongoose");
const employeeModel = require("../model/employees");

const createEmployee = async (req, res) => {
  const { id, access_level, request_time, room } = req.body;
  try {
    const employee = await employeeModel.create({
      id,
      access_level,
      request_time,
      room,
    });
    res.status(201).json(employee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getEmployee = async (req, res) => {
  try {
    const employees = await employeeModel.find();
    res.status(200).json(employees);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createEmployee, getEmployee };
