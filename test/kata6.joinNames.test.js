const { joinNames } = require("../src");

describe("joinNames", () => {
  it("returns string of names, seperated by commas and an ampersand", () => {
expect(joinNames(["Lisa", "Maggie", "Bart"])).toBe("Lisa, Maggie & Bart")

  });
});
