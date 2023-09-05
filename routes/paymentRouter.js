const express = require('express');
const paymentController = require('../controllers/paymentControllers');
const router = express.Router();

router.route("/")
    .post(paymentController.createNewPayment)
    .get(paymentController.getAllPayments);

router.route("/:id").get(paymentController.getPaymentById);

module.exports = router;