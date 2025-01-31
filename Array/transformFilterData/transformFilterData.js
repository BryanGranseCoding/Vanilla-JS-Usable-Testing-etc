const products = [
    { name: "Laptop", category: "Electronics", price: 1200, inStock: true },
    { name: "T-shirt", category: "Clothing", price: 25, inStock: true },
    { name: "Headphones", category: "Electronics", price: 150, inStock: false },
    { name: "Jeans", category: "Clothing", price: 75, inStock: true },
    { name: "Keyboard", category: "Electronics", price: 100, inStock: true },
    { name: "Socks", category: "Clothing", price: 10, inStock: false },
  ];

  //1. Filter In-Stock Products: Create a new array called inStockProducts that contains only the products that are inStock.  Use the filter() method.

  const inStocksProducts = products.filter(product => product.inStock);

  //console.log(inStocksProducts);

  //2. Map to Product Names: Create a new array called productNames that contains only the names of the products (strings).  Use the map() method.  Ideally, use the inStockProducts array you created in step 1, so you only get the names of in-stock products.

  const productNames = inStocksProducts.map(product => product.name);
  //console.log("Product Names:", productNames);

//Calculate Total Price of In-Stock Electronics: Calculate the total price of all in-stock electronics products.  Use a combination of filter() (to get the electronics that are in stock) and reduce() (to sum the prices).

const totalPrice = inStocksProducts.filter(product => product.category === 'Electronics').reduce((total, product) => total + product.price, 0);

//console.log('totalPrice:', totalPrice);

//Bonus Challenge:  Create a Categorized Object: Create an object where the keys are the product categories (e.g., "Electronics", "Clothing") and the values are arrays of the products in that category.  Use the reduce() method.

const categorizedProducts = products.reduce((categories, product) => {
    if (!categories[product.category]) {
        categories[product.category] = [];
    }
    categories[product.category].push(product);
    return categories;
}, {});

console.log('categorizedProducts:', categorizedProducts);
