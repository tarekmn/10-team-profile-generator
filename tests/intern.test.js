const Intern= require('../lib/intern')

describe("Intern", () => {
  describe("school", () => {
    it("should return the given school perimeter", () => {
      const template = new Intern("name", "employeeID", "email", "school");
      const result = template.school
      expect(result).toEqual('school')
    })
  })





})









// class Intern extends Employee {
//   constructor(name, employeeID, email, school){
//     super(name, employeeID, email)
//     this.school= school
//   }
  
  
//   }