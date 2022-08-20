const Intern = require("../lib/intern");

describe("Intern", () => {
  const name = "Ernie";
  const id = "3";
  const email = "ernie@email.com";
  const school = "University of Oregon";
  const role = "Intern";
  const ernie = new Intern(name, id, email, school);
  describe("getOfficeNumber", () => {
    it("should return a string", () => {
      expect(ernie.getSchool()).toMatch(school);
    });
  });
  describe("getRole", () => {
    it("should return a string", () => {
      expect(ernie.getRole()).toMatch(role);
    });
  });
});
