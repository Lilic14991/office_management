const Payment = require('../models/Payment');

exports.getAllPayments = async (req, res, next) => {
    try {
        const [payment, _] = await Payment.findAll();

        res.status(200).json({count: payment.length, payment});
    } catch (error) {
        console.log(error);
        next(error);
    }
}

exports.createNewPayment = async (req, res, next) => {
    try {
        let {customerNumber, checkNumber, paymentDate, amount} = req.body;
        let payment = new Payment(customerNumber, checkNumber, paymentDate, amount);

        payment = await payment.save();
        res.status(201).json({message: "payment created", created: true});
    } catch (error) {
        console.log(errror);
        next(error);
    }
}

exports.getPaymentById = async (req, res, next) => {
    try {
        let paymentId = req.params.id;
        console.log(req.params);
        let [payment, _] = await Payment.findById(paymentId);

        res.status(200).json({payment});
    } catch (error) {
        console.log(error);
        next(error);
    }
}