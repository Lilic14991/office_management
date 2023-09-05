const db = require("../config/db");

class Payment {
    constructor(customerNumber, checkNumber, paymentDate, amount) {
        this.customerNumber = customerNumber,
        this.checkNumber = checkNumber,
        this.paymentDate = paymentDate,
        this.amount = amount   
    }

    async save() {

        let sql = `
        INSERT INTO payments(
            customerNumber,
            checkNumber,
            paymentDate,
            amount,

        )
        VALUES(
            ${this.customerNumber},
           '${this.checkNumber}',
            ${this.paymentDate},
            ${this.amount}
        )
        `;
        
        return db.execute(sql);
    }

    static findAll() {
        let sql = "SELECT * FROM payments";

        return db.execute(sql);
    }

    static findById(paymentId) {
        console.log(paymentId);
        let sql = `SELECT * FROM payments WHERE checkNumber = '${paymentId}'`;
        
        return db.execute(sql);
    }
}

module.exports = Payment;