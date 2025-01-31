Here's a JavaScript array exercise you can do right now to improve your skills, focusing on common array methods:

Exercise:  Transforming and Filtering Product Data

Imagine you have a list of product objects, and you need to perform some data manipulation.  Here's the initial data:

JavaScript

``bash
const products = [
  { name: "Laptop", category: "Electronics", price: 1200, inStock: true },
  { name: "T-shirt", category: "Clothing", price: 25, inStock: true },
  { name: "Headphones", category: "Electronics", price: 150, inStock: false },
  { name: "Jeans", category: "Clothing", price: 75, inStock: true },
  { name: "Keyboard", category: "Electronics", price: 100, inStock: true },
  { name: "Socks", category: "Clothing", price: 10, inStock: false },
];
``
Your Tasks:

Filter In-Stock Products: Create a new array called inStockProducts that contains only the products that are inStock.  Use the filter() method.

Map to Product Names: Create a new array called productNames that contains only the names of the products (strings).  Use the map() method.  Ideally, use the inStockProducts array you created in step 1, so you only get the names of in-stock products.

Calculate Total Price of In-Stock Electronics: Calculate the total price of all in-stock electronics products.  Use a combination of filter() (to get the electronics that are in stock) and reduce() (to sum the prices).

Bonus Challenge:  Create a Categorized Object: Create an object where the keys are the product categories (e.g., "Electronics", "Clothing") and the values are arrays of the products in that category.  Use the reduce() method.

Example of the Bonus Challenge Result:

JavaScript
``bash
{
  Electronics: [
    { name: "Laptop", category: "Electronics", price: 1200, inStock: true },
    { name: "Keyboard", category: "Electronics", price: 100, inStock: true },
  ],
  Clothing: [
    { name: "T-shirt", category: "Clothing", price: 25, inStock: true },
    { name: "Jeans", category: "Clothing", price: 75, inStock: true },
  ],
}
``
Tips and Hints:

filter(): Takes a callback function that returns true if the element should be included in the new array, and false otherwise.
map(): Takes a callback function that transforms each element of the array into a new element for the new array.
reduce(): Takes a callback function (often called a "reducer") that accumulates a single value by processing each element of the array. It also takes an initial value for the accumulator.
Arrow functions: Use arrow functions (=>) for more concise code. For example: products.filter(product => product.inStock)
How to Check Your Work:

Use console.log() to print the results of each step.  Compare your output to what you expect based on the data.

This exercise combines several important array methods and gives you practice in data transformation, filtering, and aggregation – all very common tasks in JavaScript development.  Good luck!  Let me know if you get stuck or want to compare solutions.