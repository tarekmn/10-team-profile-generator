const Employee = require('../lib/employee');



//Engineer = name, employeeID, email, github

class Engineer extends Employee {
  constructor(name, github, employeeID, email) {
    super(name, employeeID, email)
    this.github = github
  }


}



module.exports = Engineer;