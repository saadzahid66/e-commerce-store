const Auth = require("../src/auth");

describe("Auth", () => {
  it("should authenticate valid users", () => {
    const auth = new Auth();
    expect(auth.login("test", "password123")).toBe("Login successful");
  });

  it("should reject invalid users", () => {
    const auth = new Auth();
    expect(auth.login("test", "wrongpassword")).toBe("Invalid credentials");
  });
});
