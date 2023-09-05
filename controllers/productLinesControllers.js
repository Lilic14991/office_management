const ProductLine = require('../models/ProductLine');

exports.createNewProductLine = async (req, res, next) => {
    try {
        let {productLine, textDescription, htmlDescription, image } = req.body
        console.log(req.body);
        let productLineC = new ProductLine(productLine, textDescription, htmlDescription, image);

        productLineC = await productLineC.save();
        res.status(201).json({message: "product line created", created: true});
    } catch (error) {
        next(error);
        console.log(error);
    }
}

exports.getAllProductLines = async (req, res, next) => {
    try {
        const [productLines, _] = await ProductLine.findAll();

        res.status(200).json({count: productLines.length, productLines});
    } catch (error) {
        console.log(error);
        next(error);
        
    }
}

exports.getProductLineById = async (req, res, next) => {
    try {
        let productLineId = req.params.id;
        console.log(productLineId);
        let [productLine, _] = await ProductLine.findById(productLineId);

        res.status(200).json({productLine});
    } catch (error) {
        console.log(error);
        next(error);
    }
}