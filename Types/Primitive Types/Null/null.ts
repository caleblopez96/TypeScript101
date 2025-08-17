// The `null` type represents the intentional absence of any value.

// Use the type annotation `null` to explicitly type a variable as null

// EXAMPLE:
let emptyValue: null = null;

//! CANNOT assign any other type to a null-typed variable
// emptyValue = 42       --> Type 'number' is not assignable to type 'null'.
// emptyValue = "hello"  --> Type 'string' is not assignable to type 'null'.

let maybeNumber: number | null = null;
maybeNumber = 100; // allowed
maybeNumber = null; // allowed
