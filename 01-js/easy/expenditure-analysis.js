/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  // Create an empty object to store total spent for each category
  let categoryTotal = {};

  // Iterate over all transactions using forEach loop
  transactions.forEach(transaction => {
    // Check if the category already exists in the categoryTotal object
    if (categoryTotal.hasOwnProperty(transaction.category)) {
      // If category exists, add the price of the transaction to its total
      categoryTotal[transaction.category] += transaction.price;
    } else {
      // If category doesn't exist, initialize it with the price of the transaction
      categoryTotal[transaction.category] = transaction.price;
    }
  });

  // Convert categoryTotal object into an array of objects
  let result = [];
  for (let category in categoryTotal) {
    result.push({ category: category, totalSpent: categoryTotal[category] });
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;
