const Sorter = require("../src/sorter");

describe("Sorter", () => {
  const products = [
    { id: 1, name: "Apple", price: 2 },
    { id: 2, name: "Banana", price: 1 },
  ];

  it("should sort products in ascending order", () => {
    const sorter = new Sorter();
    const sorted = sorter.sortByPrice(products, "asc");
    expect(sorted[0].price).toBe(1);
  });

  it("should sort products in descending order", () => {
    const sorter = new Sorter();
    const sorted = sorter.sortByPrice(products, "desc");
    expect(sorted[0].price).toBe(2);
  });
});
