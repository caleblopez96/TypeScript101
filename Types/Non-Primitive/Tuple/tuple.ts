// ============================================
// TYPESCRIPT TUPLES - QUICK REFERENCE
// ============================================

// Basic tuples (fixed length & types)
let coords: [number, number] = [10, 20];
let person: [string, number, boolean] = ["Alice", 30, true];
let rgb: [number, number, number] = [255, 0, 128];

// Tuple vs Array difference
let array: number[] = [1, 2, 3, 4]; // can have any length
let tuple: [number, number] = [1, 2]; // exactly 2 elements

// Optional elements (TypeScript 3.0+)
let point: [number, number, number?] = [10, 20]; // z is optional
let config: [string, boolean?] = ["dev"]; // second element optional

// Rest elements (TypeScript 3.0+)
let prefix: [string, ...number[]] = ["data", 1, 2, 3, 4];
let mixed: [boolean, ...string[], number] = [true, "a", "b", "c", 42];

// Named tuple elements (TypeScript 4.0+)
let namedCoords: [x: number, y: number] = [10, 20];
let user: [name: string, age: number, active?: boolean] = ["John", 25];

// Readonly tuples
let readonlyTuple: readonly [string, number] = ["hello", 42];
// readonlyTuple[0] = "hi"; // ❌ Error

// Destructuring tuples
let [name, age, active] = person;
let [x, y] = coords;
let [first, ...rest] = prefix; // first: string, rest: number[]

// Tuple as function parameter/return
function getUser(): [string, number] {
  return ["Alice", 30];
}

function processCoords([x, y]: [number, number]): number {
  return x + y;
}

// Array of tuples
let points: [number, number][] = [
  [0, 0],
  [10, 20],
  [5, 15],
];

let users: [string, number, boolean][] = [
  ["Alice", 30, true],
  ["Bob", 25, false],
];

// Tuple methods (inherit from Array)
let data: [string, number] = ["hello", 42];
console.log(data.length); // 2
console.log(data[0]); // "hello"
data.push("extra"); // ❌ Type error (but runtime works)

// Use cases
type ApiResponse = [data: any, status: number, message: string];
type Coordinates = [lat: number, lng: number];
type HSL = [hue: number, saturation: number, lightness: number];
type DatabaseRow = [id: number, name: string, email: string, createdAt: Date];

// Real-world examples
function useState<T>(initial: T): [T, (value: T) => void] {
  let state = initial;
  return [
    state,
    (value: T) => {
      state = value;
    },
  ];
}

const [count, setCount] = useState(0);

// Multiple return values
function divideWithRemainder(
  a: number,
  b: number
): [quotient: number, remainder: number] {
  return [Math.floor(a / b), a % b];
}

const [quotient, remainder] = divideWithRemainder(10, 3); // [3, 1]

// Tuple vs Object comparison
// Tuple: position-based access, less memory, good for simple data
let tupleUser: [string, number] = ["Alice", 30];

// Object: property-based access, more readable, better for complex data
let objectUser: { name: string; age: number } = { name: "Alice", age: 30 };
