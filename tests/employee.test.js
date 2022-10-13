const Employee = require('../lib/employee');

describe("Employee", () => {
  
  describe("name", () => {
    it("should return the given name perimeter", () => {
      const template = new Employee("name", "employeeID", "email"); //Arrange -individual method or function being tested (setup)
      const result = template.name //Act- getting the information (run the code)
      expect(result).toEqual('name') //Assert- this is what the machine is testing or evaluating   (what is expected to happen)
    })
  })


  describe("employeeID", () => {
    it("should return the given ID perimeter", () => {
      const template = new Employee("name", "employeeID", "email"); //Arrange
      const result = template.employeeID //Act
      expect(result).toEqual('employeeID') //Assert 
    })
  })

  describe("email", () => {
    it("should return the given email perimeter", () => {
      const template = new Employee("name", "employeeID", "email"); //Arrange
      const result = template.email //Act 
      expect(result).toEqual('email') //Assert 
    })
  })

})



