const Helper = require("../src/helper");

describe("Helper", () => {
  it("should capitalize strings correctly", () => {
    expect(Helper.capitalize("hello")).toBe("Hello");
  });
});
