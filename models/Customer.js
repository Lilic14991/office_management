const db = require('../config/db');

class Customer {
    constructor(customerNumber, customerName, contactLastName, contactFirstName, phone, addressLine1, addressLine2, city, state, postalCode, country, employeeNumber, creditLimit) {
        this.customerNumber = customerNumber,
        this.customerName = customerName,
        this.contactLastName = contactLastName,
        this.contactFirstName = contactFirstName,
        this.phone = phone,
        this.addressLine1 = addressLine1,
        this.addressLine2 = addressLine2,
        this.city = city,
        this.state = state,
        this.postalCode = postalCode,
        this.country = country,
        this.employeeNumber = employeeNumber,
        this.creditLimit = creditLimit
    }

    async save() {
        let d = new Date();
        let yyyy = d.getFullYear();
        let mm = d.getMonth() + 1;
        let dd = d.getDate();

        let createdAtDate = `${yyyy}-${mm}-${dd}`;

        let sql = `
        INSERT INTO offices(
            customerNumber,
            customerName,
            contactLastName,
            contactFirstName,
            phone,
            addressLine1,
            addressLine2,
            city,
            state,
            postalCode,
            country,
            salesRepEmployeeNumber,
            creditLimit,
            createdAt
        )
        VALUES(
            '${this.customerNumber}',
            '${this.customerName}',
            '${this.contactLastName}',
            '${this.contactFirstName}',
            '${this.phone}',
            '${this.addressLine1}',
            '${this.addressLine2}',
            '${this.city}',
            '${this.state}',
            '${this.postalCode}',
            '${this.country}',
            '${this.employeeNumber}',
            '${this.creditLimit}',
            '${createdAtDate}'
        )
        `;
        
        return db.execute(sql);
    }

    static findAll() {
        let sql = "SELECT * FROM customers";

        return db.execute(sql);
    }

    static findById(customerId) {
        console.log(customerId);
        let sql = `SELECT * FROM customers WHERE customerNumber = ${customerId}`;
        
        return db.execute(sql);
    }
}




module.exports = Customer;