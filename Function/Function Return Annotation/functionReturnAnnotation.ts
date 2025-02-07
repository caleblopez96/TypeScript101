// you can specify the type returned by a function.

// add the type annotation after the function parameter list.

// EXAMPLE: function that returns number
const addNumbers = (x: number, y: number): number => x + y;

// EXAMPLE: function that returns string
const combineStrings = (str1: string, str2: string): string => str1 + str2;

// EXAMPLE: function that returns boolean
function isEven(num: number): boolean {
  return num % 2 === 0;
}

// EXAMPLE: function that returns any
//* disables type checking
function randomValue(): any {
  return Math.random() > 0.5 ? "hello" : 50;
}

// EXAMPLE: function using any
function getUnknown(): unknown {
  return "Hello";
}

// EXAMPLE: function with object return
function randomCoordiante(): { x: number; y: number } {
  return { x: Math.random(), y: Math.random() };
}

// EXAMPLE: function that returns promise
async function fetchData(): Promise<string> {
  return "data loaded";
}

// EXAMPLE: function that returns another function
function greetUser(user: string): () => string {
  return function () {
    return `Hello ${user}`;
  };
}

// EXAMPLE: union types
function rando(num: number): string | number {
  return Math.random() < 0.5 ? num.toString() : num;
}
