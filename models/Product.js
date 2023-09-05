const db = require('../config/db');

class Product {
    constructor(productCode, productName, productLine, productScale, productVendor, productDescription, quantityInStock, buyPrice, msrp) {
        this.productCode = productCode,
        this.productName = productName,
        this.productLine = productLine,
        this.productScale = productScale,
        this.productVendor = productVendor,
        this.productDescription = productDescription,
        this.quantityInStock = quantityInStock,
        this.buyPrice = buyPrice,
        this.msrp = msrp
    }

    async save() {
        let d = new Date();
        let yyyy = d.getFullYear();
        let mm = d.getMonth() + 1;
        let dd = d.getDate();

        let createdAtDate = `${yyyy}-${mm}-${dd}`;

        let sql = `
        INSERT INTO products(
            productCode,
            productName,
            productLine,
            productScale,
            productVendor,
            productDescription,
            quantityInStock,
            buyPrice,
            MSRP,
            createdAt
        )
        VALUES(
            '${this.productCode}',
            '${this.productName}',
            '${this.productLine}',
            '${this.productScale}',
            '${this.productVendor}',
            '${this.productDescription}',
             ${this.quantityInStock},
             ${this.buyPrice},
             ${this.msrp},
            '${createdAtDate}'
        )
        `;
        
        return db.execute(sql);
    }

    static findAll() {
        let sql = "SELECT * FROM products";

        return db.execute(sql);
    }

    static findById(productId) {
        console.log(productId);
        let sql = `SELECT * FROM products WHERE productCode = '${productId}'`;
        
        return db.execute(sql);
    }

}

module.exports = Product;