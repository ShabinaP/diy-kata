const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it("returns yes when boolean is true",() => {

         expect(booleanToWord(true)).toBe("Yes")
  })});

 it("returns no when boolean is false", () => {
   expect(booleanToWord(false)).toBe("No")
 }
 );
