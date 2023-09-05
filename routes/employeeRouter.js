const express = require('express');
const employeeController = require('../controllers/employeeControllers');
const router = express.Router();

router.route("/")
    .get(employeeController.getAllEmployees)
    .post(employeeController.createNewEmployee);

router.route("/:id").get(employeeController.getEmployeeById);

module.exports = router;

