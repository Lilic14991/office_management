const Product = require("../models/Product");

exports.getAllProducts = async (req, res, next) => {
    try {
        const [products, _] = await Product.findAll();

        res.status(200).json({count: products.length, products});
    } catch (error) {
        console.log(error);
        next(error);
        
    }
}

exports.createNewProduct = async (req, res, next) => {
    try {
        let { productCode, productName,  productLine, productScale, productVendor, productDescription, quantityInStock, buyPrice, msrp } = req.body;
        let product = new Office(productCode, productName, productLine, productScale, productVendor, productDescription, quantityInStock, buyPrice, msrp);

        product = await product.save();
        res.status(201).json({message: "Product created", created: true});
    } catch (error) {
        console.log(error);
        next(error);
    }    
}

exports.getProductById = async (req, res, next) => {
    try {
        let productId = req.params.id;
        let [product, _] = await Product.findById(productId);

        res.status(200).json({product});
    } catch (error) {
        console.log(error);
        next(error);
    }
}