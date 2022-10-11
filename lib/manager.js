const Employee = require('../lib/employee');


//Team manager = name, employeeID, email, office#

class Manager extends Employee {
  constructor(name, employeeID, email, office){
    super(name, employeeID, email)
    this.office = office
  }
  
  
  }










module.exports = Manager;