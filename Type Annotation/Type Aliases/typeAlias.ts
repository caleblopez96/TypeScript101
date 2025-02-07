// instead of writing out object types in an annotation, you can declare them separately in a type alias.

// the type alias is just the desired shape of the object.

// EXAMPLE:

//* DO:
// Define type alias
type Person = {
  name: string;
  age: number;
};
// use type alias to annotate the variable
let person3: Person = {
  name: "Caleb",
  age: 28,
};

//! DONT:
let person2: {
  name: string;
  age: number;
} = {
  name: "caleb",
  age: 28,
};
