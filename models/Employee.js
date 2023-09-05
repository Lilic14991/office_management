const db = require('../config/db');

class Employee {
    constructor(employeeNumber, lastName, firstName, extension, email, officeCode, reportsTo, jobTitle) {
        this.employeeNumber = employeeNumber,
        this.lastName = lastName,
        this.firstName = firstName,
        this.extension = extension,
        this.email = email,
        this.officeCode = officeCode,
        this.reportsTo = reportsTo,
        this.jobTitle = jobTitle
    }


    static findAll() {
        let sql = "SELECT * FROM employees";

        return db.execute(sql);
    }

    static findById(employeeId) {
        let sql = `SELECT * FROM employees e
        INNER JOIN offices o ON e.officeCode = o.officeCode
        WHERE employeeNumber = ${employeeId}`;

        return db.execute(sql);
    }

    async save() {
        let d = new Date();
        let yyyy = d.getFullYear();
        let mm = d.getMonth() + 1;
        let dd = d.getDate();

        let createdAtDate = `${yyyy}-${mm}-${dd}`;

        let sql = `
        INSERT INTO employees(
            employeeNumber,
            firstName,
            lastName,
            extension,
            email,
            officeCode,
            reportsTo,
            jobTitle,
            createdAt
        )
        VALUES(
            '${this.employeeNumber}',
            '${this.firstName}',
            '${this.lastName}',
            '${this.extension}',
            '${this.email}',
            '${this.officeCode}',
            '${this.reportsTo}',
            '${this.jobTitle}',
            '${createdAtDate}'
        )
        `;
        
        return db.execute(sql);
    }


}

module.exports = Employee;