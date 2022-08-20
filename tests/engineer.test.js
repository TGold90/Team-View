const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  const name = "Steve";
  const id = "2";
  const email = "steve@email.com";
  const gitHub = "Geensmack";
  const role = "Engineer";
  const ernie = new Engineer(name, id, email, gitHub);
  describe("getGitHub", () => {
    it("should return a string", () => {
      expect(ernie.getGitHub()).toMatch(gitHub);
    });
  });
  describe("getRole", () => {
    it("should return a string", () => {
      expect(ernie.getRole()).toMatch(role);
    });
  });
});
