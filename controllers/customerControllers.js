const Customer = require('../models/Customer');

exports.getAllCustomers = async (req, res, next) => {
    try {
        const [customers, _] = await Customer.findAll();

        res.status(200).json({count: customers.length, customers});
    } catch (error) {
        console.log(error);
        next(error);
    }
}

exports.createNewCustomer = async (req, res, next) => {
    try {
        let { customerNumber, customerName,  contactLastName, contactFirstName, phone, addressLine1, addressLine2, city, state, postalCode, country,  employeeNumber, creditLimit} = req.body;
        let customer = new Customer(customerNumber, customerName, contactLastName, contactFirstName, phone, addressLine1, addressLine2, city, state, postalCode, country, employeeNumber, creditLimit);

        customer = await customer.save();
        res.status(201).json({message: "customer created", created: true});
    } catch (error) {
        console.log(error);
        next(error);
    }    
}

exports.getCustomerById = async (req, res, next) => {
    try {
        let customerId = req.params.id;
        let [customer, _] = await Customer.findById(customerId);

        res.status(200).json({customer});
    } catch (error) {
        console.log(error);
        next(error);
    }
}