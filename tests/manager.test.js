const Manager = require('../lib/manager')

describe("Manager", () => {
  describe("office", () => {
    it("should return the given office perimeter", () => {
      const template = new Manager("name", "employeeID", "email", "office");
      const result = template.office
      expect(result).toEqual('office')
    })
  })

})