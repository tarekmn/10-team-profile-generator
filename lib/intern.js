const Employee = require('../lib/employee');


//Intern = name, employeeID, email, school

class Intern extends Employee {
  constructor(name, employeeID, email, school){
    super(name, employeeID, email)
    this.school= school
  }
  
  
  }










module.exports = Intern;