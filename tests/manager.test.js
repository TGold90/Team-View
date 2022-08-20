const Manager = require("../lib/manager");

describe("Manager", () => {
  const name = "Scott";
  const id = "1";
  const email = "scott@email.com";
  const officeNo = "1";
  const role = "Manager";
  const scott = new Manager(name, id, email, officeNo);
  describe("getOfficeNumber", () => {
    it("should return a string", () => {
      expect(scott.getOfficeNumber()).toMatch(officeNo);
    });
  });
  describe("getRole", () => {
    it("should return a string", () => {
      expect(scott.getRole()).toMatch(role);
    });
  });
});
