const Employee = require('../lib/employee');

describe("Employee", ()=> {
  describe("name"), () => {
    it("should return the given name perimeter"), () => {
      const template = new Employee("name", "employeeID", "email"); //Arrange
      const result = template.getname() //Act getting the information
      expect(result).toEqual('name') //Assert 
    }
  }
})

describe("employeeID"), () => {
  it("should return the given ID perimeter"), () => {
    const template = new Employee("name", "employeeID", "email"); //Arrange
    const result = template.getID() //Act getting the information
    expect(result).toEqual('employeeID') //Assert 
  }
}




// class Employee {        //***capital or not?? */
//   constructor(name, employeeID, email) {
//     this.name = name;
//     this.employeeID = employeeID;
//     this.email= email;
//   }