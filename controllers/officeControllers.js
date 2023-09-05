const Office = require('../models/Office');

exports.getAllOffices = async (req, res, next) => {
    try {
        const [offices, _] = await Office.findAll();

        res.status(200).json({count: offices.length, offices});
    } catch (error) {
        console.log(error);
        next(error);
        
    }
}

exports.createNewOffice = async (req, res, next) => {
    try {
        let { officeCode, city,  phone, addressLine1, addressLine2, state, country, postalCode, territory } = req.body;
        let office = new Office(officeCode, city, phone, addressLine1, addressLine2, state, country, postalCode, territory);

        office = await office.save();
        res.status(201).json({message: "Office created", created: true});
    } catch (error) {
        console.log(error);
        next(error);
    }    
}

exports.getOfficeById = async (req, res, next) => {
    try {
        let officeId = req.params.id;
        let [office, _] = await Office.findById(officeId);

        res.status(200).json({office});
    } catch (error) {
        console.log(error);
        next(error);
    }
}