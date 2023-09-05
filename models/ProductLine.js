const db = require('../config/db');

class ProductLine {
    constructor(productLine, textDescription, htmlDescription, image) {
        this.productLine = productLine,
        this.textDescription = textDescription,
        this.htmlDescription = htmlDescription,
        this.image = image
    }

    static findAll() {
        let sql = "SELECT * FROM productLines";

        return db.execute(sql);
    }

    static findById(productLineId) {
        console.log(productLineId);
        let sql = `SELECT * FROM productLines WHERE productLine = '${productLineId}'`;
        
        return db.execute(sql);
    }

    async save() {
        let d = new Date();
        let yyyy = d.getFullYear();
        let mm = d.getMonth() + 1;
        let dd = d.getDate();

        let createdAtDate = `${yyyy}-${mm}-${dd}`;

        let sql = `
        INSERT INTO productLines(
            productLine, 
            textDescription, 
            htmlDescription, 
            image, 
            createdAt
        ) 
        VALUES(
            '${this.productLine}',
            '${this.textDescription}',
            '${this.htmlDescription}', 
            '${this.image}', 
            '${createdAtDate}'
        )
        `;

        return db.execute(sql);
    }

}

module.exports = ProductLine;