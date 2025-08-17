// SYNTAX:

// Named function:
// function functionName(param1: Type1, param2: Type2, ...): ReturnType { ... }

// Function expression:
// const functionName: (param1: Type1, param2: Type2, ...) => ReturnType = (param1, param2, ...) => { ... };

// Type alias for function:
// type FunctionType = (param1: Type1, param2: Type2, ...) => ReturnType;

// Callback function as parameter:
// function doSomething(callback: (param: Type) => ReturnType) { ... }

// 1. Function with typed parameters and return value
function add(a: number, b: number): number {
  return a + b;
}

// 2. Function expression with type annotation
const multiply: (x: number, y: number) => number = (x, y) => x * y;

// 3. Optional parameters (using ?)
function greet(name: string, age?: number): string {
  return age ? `Hello ${name}, age ${age}` : `Hello ${name}`;
}

// 4. Default parameter values
function exponent(base: number, power: number = 2): number {
  return base ** power;
}

// 5. Rest parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

// 6. Void return type (no return value)
function logMessage(message: string): void {
  console.log(message);
}

// 7. Function type alias
type BinaryOperation = (x: number, y: number) => number;
const subtract: BinaryOperation = (x, y) => x - y;

// 8. Functions as parameters (callbacks)
function operate(
  x: number,
  y: number,
  operation: (a: number, b: number) => number
) {
  return operation(x, y);
}
const result = operate(5, 3, multiply);

// 9. Anonymous functions / arrow functions
const divide = (a: number, b: number): number => a / b;

// 10. Function returning a function
function makeAdder(a: number): (b: number) => number {
  return function (b: number) {
    return a + b;
  };
}
const addFive = makeAdder(5);
const sumResult = addFive(10); // 15
