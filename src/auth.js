class Auth {
  constructor() {
    this.users = [{ username: "test", password: "password123" }];
  }

  login(username, password) {
    const user = this.users.find(
      (u) => u.username === username && u.password === password
    );
    return user ? "Login successful" : "Invalid credentials";
  }
}

module.exports = Auth;
