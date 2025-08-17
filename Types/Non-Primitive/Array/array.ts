// SYNTAX: Generic type
let numbers1: Array<number> = [1, 2, 3, 4];

// SYNTAX: Shorthand type
let numbers2: number[] = [5, 6, 7, 8];

// Basic declarations
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"];
let mixed: (string | number)[] = ["hello", 42];

// Empty & initialization
let empty: number[] = [];
let filled: number[] = new Array(3).fill(0); // [0, 0, 0]
let range: number[] = Array.from({ length: 3 }, (_, i) => i); // [0, 1, 2]

// Readonly arrays
let readonly: readonly number[] = [1, 2, 3];
// readonly.push(4); // ❌ Error

// Arrays of objects
type User = { id: number; name: string; active?: boolean };
let users: User[] = [
  { id: 1, name: "John", active: true },
  { id: 2, name: "Jane" },
];

// Multidimensional arrays
let matrix: number[][] = [
  [1, 2],
  [3, 4],
];
let cube: number[][][] = [[[1, 2]], [[3, 4]]];

// Tuples (fixed length/types)
let coords: [number, number] = [10, 20];
let person: [string, number, boolean?] = ["Alice", 30]; // optional element
let rest: [string, ...number[]] = ["prefix", 1, 2, 3]; // rest elements

// Array methods with types
let nums = [1, 2, 3, 4, 5];
let doubled: number[] = nums.map((n) => n * 2);
let evens: number[] = nums.filter((n) => n % 2 === 0);
let found: number | undefined = nums.find((n) => n > 3);
let sum: number = nums.reduce((acc, curr) => acc + curr, 0);
let hasEven: boolean = nums.some((n) => n % 2 === 0);
let allPositive: boolean = nums.every((n) => n > 0);

// Generic arrays
function getFirst<T>(arr: T[]): T | undefined {
  return arr[0];
}
let first = getFirst(numbers); // number | undefined

// Destructuring
let [a, b, c] = numbers;
let [head, ...tail] = numbers;
let [x, y, z = 0] = numbers; // default value

// Utility types
type ElementType = number[][number]; // number
type ArrayLength = [string, number]["length"]; // 2

// Type guards
function isNonEmpty<T>(arr: T[]): arr is [T, ...T[]] {
  return arr.length > 0;
}

// Advanced operations
let nested = [
  [1, 2],
  [3, 4],
];
let flattened = nested.flat(); // [1, 2, 3, 4]
let words = ["hello world"].flatMap((s) => s.split(" ")); // ["hello", "world"]
let sorted = nums.sort((a, b) => b - a); // descending

// Real-world example
type CartItem = { name: string; price: number; qty: number };
let cart: CartItem[] = [
  { name: "Laptop", price: 999, qty: 1 },
  { name: "Mouse", price: 25, qty: 2 },
];
let total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

// Data pipeline
let processed = users
  .filter((u) => u.active)
  .map((u) => u.name.toLowerCase())
  .sort();
