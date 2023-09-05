const express = require('express');
const officeController = require('../controllers/officeControllers')
const router = express.Router();

// @route GET & POST /offices/
router.route("/")
    .get(officeController.getAllOffices)
    .post(officeController.createNewOffice);

router.route("/:id").get(officeController.getOfficeById);

module.exports = router;