// The `Symbol` type represents a unique and immutable identifier.
// Often used as object property keys to avoid name collisions.

// Use the type annotation `symbol` to explicitly type a variable as a Symbol

// EXAMPLE:
let uniqueId: symbol = Symbol("id");

//! CANNOT assign any other type to a symbol-typed variable
// uniqueId = 42        --> Type 'number' is not assignable to type 'symbol'.
// uniqueId = "id"      --> Type 'string' is not assignable to type 'symbol'.

// Symbols are always unique, even with the same description:
const sym1 = Symbol("id");
const sym2 = Symbol("id");
// console.log(sym1 === sym2); // false

// Symbols can be used as object keys:
const obj = {
  [Symbol("key")]: "value",
};
console.log(obj);
