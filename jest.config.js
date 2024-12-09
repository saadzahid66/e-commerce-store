module.exports = {
  // Enable coverage reporting
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // Specify the coverage report format
  coverageReporters: ["lcov", "text-summary"],

  // Optional: Specify which files to collect coverage for
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}", // Adjust the file pattern to your source files
    "!src/**/*.d.ts", // Exclude type definition files if you don't need them
  ],

  // Optional: Define the test environment (defaults to jsdom, which is fine for most front-end projects)
  testEnvironment: "node", // 'node' or 'jsdom' depending on your project
};
