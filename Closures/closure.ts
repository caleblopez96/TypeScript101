// Challenge: Counter Factory

// Task: Write a function createCounter that returns an object with three methods:

// increment() → increases the counter by 1 and returns the current value.

// decrement() → decreases the counter by 1 and returns the current value.

// reset() → resets the counter to 0 and returns the current value.

// Requirements:

// The counter should not be accessible directly from outside (use a closure).

// Example usage:
/*
const counter = createCounter();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.reset());     // 0

*/

interface Counter {
    increment(): number;
    decrement(): number;
    reset(): number;
}

function counterFactory(): Counter {
    let count = 0;
    return {
        increment: function () {
            return ++count;
        },
        decrement: function () {
            return --count;
        },
        reset: function () {
            count = 0;
            return count;
        },
    };
}

const counter = counterFactory();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.reset()); // 0
