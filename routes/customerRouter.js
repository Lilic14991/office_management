const express = require('express');
const customerController = require('../controllers/customerControllers');
const router = express.Router();

router.route("/")
    .get(customerController.getAllCustomers)
    .post(customerController.createNewCustomer)

router.route("/:id").get(customerController.getCustomerById);

module.exports = router;