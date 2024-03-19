let count = 0;

function counter() {
    console.log("Counter called, number of times is: " + ++count);
}

counter(); // Output: Counter called, number of times is: 1
counter(); // Output: Counter called, number of times is: 2

counter(); // Output: Counter called, number of times is: 1
counter(); // Output: Counter called, number of times is: 2
counter(); // Output: Counter called, number of times is: 1
counter(); // Output: Counter called, number of times is: 2
counter(); // Output: Counter called, number of times is: 1
counter(); // Output: Counter called, number of times is: 2
counter(); // Output: Counter called, number of times is: 1
counter(); // Output: Counter called, number of times is: 2

