const Engineer = require('../lib/engineer')

describe("Engineer", () => {
  describe("github", () => {
    it("should return the given github perimeter", () => {
      const template = new Engineer("name", "employeeID", "email", "github");
      const result = template.github
      expect(result).toEqual('github')
    })
  })

})

