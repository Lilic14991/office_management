const express = require('express');
const productController = require('../controllers/productControllers');
const router = express.Router();

router.route("/")
    .post(productController.createNewProduct)
    .get(productController.getAllProducts);

router.route("/:id").get(productController.getProductById);

module.exports = router;