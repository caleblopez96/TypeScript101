let personAge: number = 18;
let isAdult: boolean = false;

/* if */
// SYNTAX:
if (condition) {
}

// if EXAMPLE:
if (personAge < 18) {
  console.log("You are no an adult");
}

/* else */
if (condition) {
  // code here
} else {
  // code here
}

// else EXAMPLE:
if (personAge < 18) {
  console.log("Not an adult");
} else {
  console.log("You're an adult");
}

/* else-if */
// SYNTAX:
if (condition) {
  // SYNTAX:
  // code to execute if condition is true
} else if (anotherCondition) {
  // code to execute if anotherCondition is true
} else {
  // code to execute if none of the above conditions are true
}

// else-if EXAMPLE:
if (personAge < 18) {
  isAdult = false;
  console.log("Not adult");
} else if (personAge >= 18 && personAge < 21) {
  isAdult = true;
  console.log("Adult, but cannot drink");
} else {
  isAdult = true;
  console.log("Adult and old enough to drink");
}
