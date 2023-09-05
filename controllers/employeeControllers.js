const Employee = require('../models/Employee');

exports.getAllEmployees = async (req, res, next) => {
    try {
        const [employee, _] = await Employee.findAll();
        res.status(200).json({count: employee.length, employee});
    } catch (error) {
        console.log(error);
        next(error);
    }
}

exports.getEmployeeById = async (req, res, next) => {
    try {
        let employeeId = req.params.id;
        let [employee, _] = await Employee.findById(employeeId);

        res.status(200).json({employee});
    } catch (error) {
        console.log(error);
        next(error);
    }
}

exports.createNewEmployee = async (req, res, next) => {
    try {
        let { employeeNumber, firstName, lastName, extension, email, officeCode, reportsTo, jobTitle } = req.body;
        let employee = new Employee(employeeNumber, firstName, lastName, extension, email, officeCode, reportsTo, jobTitle);

        employee = await employee.save();
        res.status(201).json({message: "Employee created", created: true});
    } catch (error) {
        console.log(error);
        next(error);
    }
}