const Employee = require('../lib/employee');

describe("Employee", () => {
  describe("name", () => {
    it("should return the given name perimeter", () => {
      const template = new Employee("name", "employeeID", "email"); //Arrange
      const result = template.name //Act getting the information
      expect(result).toEqual('name') //Assert 
    })
  })


  describe("employeeID", () => {
    it("should return the given ID perimeter", () => {
      const template = new Employee("name", "employeeID", "email"); //Arrange
      const result = template.employeeID //Act getting the information
      expect(result).toEqual('employeeID') //Assert 
    })
  })

  describe("email", () => {
    it("should return the given email perimeter", () => {
      const template = new Employee("name", "employeeID", "email"); //Arrange
      const result = template.email //Act getting the information
      expect(result).toEqual('email') //Assert 
    })
  })

})