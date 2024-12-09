class Sorter {
  sortByPrice(products, order = "asc") {
    return products.sort((a, b) =>
      order === "asc" ? a.price - b.price : b.price - a.price
    );
  }
}

module.exports = Sorter;
