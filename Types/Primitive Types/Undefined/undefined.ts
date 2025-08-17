// The `undefined` type represents a variable that has been declared but not assigned a value.
// It is one of TypeScript's primitive value types.

// Use the type annotation `undefined` to explicitly type a variable as undefined

// EXAMPLE:
let notAssigned: undefined = undefined;

//! CANNOT assign any other type to an undefined-typed variable
// notAssigned = 42        --> Type 'number' is not assignable to type 'undefined'.
// notAssigned = "hello"   --> Type 'string' is not assignable to type 'undefined'.

// often used in combination with union types for optional values:
let maybeNumber2: number | undefined;
maybeNumber2 = 100; // allowed
maybeNumber2 = undefined; // allowed
