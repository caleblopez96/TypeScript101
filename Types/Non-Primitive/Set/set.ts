// SYNTAX:

// Creating a Set:
// let mySet: Set<Type> = new Set();

// Methods:
// mySet.add(value: Type): this
// mySet.has(value: Type): boolean
// mySet.delete(value: Type): boolean
// mySet.clear(): void
// mySet.size: number
// mySet.values(): IterableIterator<Type>
// mySet.keys(): IterableIterator<Type> // same as values()
// mySet.entries(): IterableIterator<[Type, Type]>
// mySet.forEach(callback: (value: Type, value2: Type, set: Set<Type>) => void): void

// ============================================
// EXAMPLES:

// 1. Creating a Set
let numbers: Set<number> = new Set();

// 2. Adding values
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(2); // duplicate, ignored

// 3. Checking existence
console.log(numbers.has(2)); // true
console.log(numbers.has(5)); // false

// 4. Deleting a value
numbers.delete(3);
console.log(numbers.has(3)); // false

// 5. Getting the size
console.log(numbers.size); // 2

// 6. Iterating over a Set
for (let num of numbers) {
  console.log(num);
}

// 7. Using forEach
numbers.forEach((num) => console.log(num));

// 8. Clearing the Set
numbers.clear();
console.log(numbers.size); // 0

// 9. Set with strings
let fruits: Set<string> = new Set(["apple", "banana", "orange"]);
fruits.add("apple"); // duplicate ignored
console.log(fruits); // Set { 'apple', 'banana', 'orange' }

// 10. Converting Set to Array
let fruitsArray: string[] = Array.from(fruits);
console.log(fruitsArray); // ['apple', 'banana', 'orange']
