const db = require('../config/db');

class Office {
    constructor(officeCode, city, phone, addressLine1, addressLine2, state, country, postalCode, territory) {
        this.officeCode = officeCode,
        this.city = city,
        this.phone = phone, 
        this.addressLine1 = addressLine1,
        this.addressLine2 = addressLine2,
        this.state = state,
        this.country = country,
        this.postalCode = postalCode,
        this.territory = territory
    }

    async save() {
        let d = new Date();
        let yyyy = d.getFullYear();
        let mm = d.getMonth() + 1;
        let dd = d.getDate();

        let createdAtDate = `${yyyy}-${mm}-${dd}`;

        let sql = `
        INSERT INTO offices(
            officeCode,
            city,
            phone,
            addressLine1,
            addressLine2,
            state,
            country,
            postalCode,
            territory,
            createdAt
        )
        VALUES(
            '${this.officeCode}',
            '${this.city}',
            '${this.phone}',
            '${this.addressLine1}',
            '${this.addressLine2}',
            '${this.state}',
            '${this.country}',
            '${this.postalCode}',
            '${this.territory}',
            '${createdAtDate}'
        )
        `;
        
        return db.execute(sql);
    }

    static findAll() {
        let sql = "SELECT * FROM offices";

        return db.execute(sql);
    }

    static findById(officeId) {
        console.log(officeId);
        let sql = `SELECT * FROM offices WHERE officeCode = '${officeId}'`;
        
        return db.execute(sql);
    }
}

module.exports = Office;
