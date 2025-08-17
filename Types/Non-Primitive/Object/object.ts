// SYNTAX:

// Basic object type annotation:
// let obj: { key1: Type1; key2: Type2; ... } = { key1: value1, key2: value2 };

// Object with optional properties:
// let obj: { key1: Type1; key2?: Type2 } = { key1: value1 };

// Index signature (dynamic keys):
// let obj: { [key: string]: ValueType } = { key1: value1, key2: value2 };

// ============================================
// EXAMPLES:

// 1. Basic object
let person: { name: string; age: number } = {
  name: "Alice",
  age: 30,
};
console.log(person.name); // "Alice"

// 2. Optional properties
let car: { make: string; model?: string } = {
  make: "Toyota",
};
console.log(car.model); // undefined

// 3. Readonly properties
let point: { readonly x: number; readonly y: number } = { x: 10, y: 20 };
// point.x = 5; // Error: Cannot assign to 'x' because it is read-only

// 4. Index signature (dynamic keys)
let scores: { [key: string]: number } = {};
scores["Alice"] = 90;
scores["Bob"] = 85;
console.log(scores["Alice"]); // 90

// 5. Nested objects
let user: { id: number; profile: { username: string; email: string } } = {
  id: 1,
  profile: {
    username: "alice123",
    email: "alice@example.com",
  },
};
console.log(user.profile.email); // "alice@example.com"

// 6. Object with function properties
let calculator: {
  add: (a: number, b: number) => number;
  subtract: (a: number, b: number) => number;
} = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
};
console.log(calculator.add(5, 3)); // 8
console.log(calculator.subtract(5, 3)); // 2

// 7. Using a type alias for objects
type PersonType = { name: string; age: number; greet: () => string };
let bob: PersonType = {
  name: "Bob",
  age: 25,
  greet: () => "Hello!",
};
console.log(bob.greet()); // "Hello!"
