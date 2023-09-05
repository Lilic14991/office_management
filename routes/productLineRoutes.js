const express = require('express');
const productLinesController = require('../controllers/productLinesControllers');
const router = express.Router();

// @route GET & POST /productLines/
router.route("/")
    .post(productLinesController.createNewProductLine)
    .get(productLinesController.getAllProductLines);

router.route("/:id").get(productLinesController.getProductLineById);

module.exports = router;