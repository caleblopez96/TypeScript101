// Function Declaration
function square1(num: number): number {
  return num * num
}

// Arrow Function
const square2 = (num: number): number => num * num

// Function Expression
const square3 = function(num: number): number {
  return num * num
}

// Async Function
async function squareAsync(num: number): Promise<number> {
  return num * num
}

// Async Arrow Function
const squareAsync2 = async (num: number): Promise<number> => num * num

// Default Parameter
function greeting(person: string = "Stranger") {
  return `Hello there, ${person}`
}