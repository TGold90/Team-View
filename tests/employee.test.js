const Employee = require("../lib/employee");

describe("Employee", () => {
  const name = "Tom";
  const id = "3";
  const email = "thomaswgold90@gmail.com";
  const role = "Employee";
  const tom = new Employee(name, id, email);
  describe("getName", () => {
    it("should return a string", () => {
      expect(tom.getName()).toMatch(name);
    });
  });
  describe("getID", () => {
    it("should return a string", () => {
      expect(tom.getID()).toMatch(id);
    });
  });
  describe("getEmail", () => {
    it("should return a string", () => {
      expect(tom.getEmail()).toMatch(email);
    });
  });
  describe("getRole", () => {
    it("should return a string", () => {
      expect(tom.getRole()).toMatch(role);
    });
  });
});
