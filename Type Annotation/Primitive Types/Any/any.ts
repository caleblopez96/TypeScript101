// use any to turn off type checking for a variable.

// basically defeats the purpose of using typescript, so use it sparingly.

// EXAMPLE:
let unknownVariable: any = "testing... testing... 1, 2, 3..."

//* CAN be reassigned to any type
unknownVariable = 87
unknownVariable = false
unknownVariable = "abc"
console.log(typeof unknownVariable) // 'string