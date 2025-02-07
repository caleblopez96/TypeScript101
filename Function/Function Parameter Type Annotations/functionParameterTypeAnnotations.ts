// in typescript, we can specify the type of function params in a func definition.

// this allows ts to enforce the types being passed to the func.

// typing params is the same as typing variables

// EXAMPLES:

// Function parameter type annotations:
const doSomething = (person: string, age: number, isFunny: boolean) => {};
console.log(doSomething("caleb", 28, true)); // undefined

// Object as function parameter
function printName(person: { first: string; last: string }): void {
  console.log(`First Name: ${person.first}, Last Name: ${person.last}`);
}
printName({ first: "Will", last: "Smith" });

// Return type annotation:
// function with default parameter
function greet(person: string = "Stranger"): string {
  return `Hello ${person}!`;
}
console.log(greet()); // Hello Stranger!

function square(num: number): number {
  return num * num;
}
console.log(square(4)); // 16

// Arrow function:
const add = (x: number, y: number): number => x + y;
console.log(add(5, 7)); // 12

//
