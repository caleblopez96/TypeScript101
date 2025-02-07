//* for big objects, instead of defining types inline, store them in a type alias:

// EXAMPLE:
let person: { name: string; age: number } = {
  name: "caleb",
  age: 28,
};

// EXAMPLE:
let coordinate: { x: number; y: number } = { x: 36, y: 2 };

// EXAMPLE: Objects with Optional Properties
let user: { name: string; email?: string } = { name: "caleb" };

// Object as function parameter
function printName2(person: { first: string; last: string }): void {
  console.log(`First Name: ${person.first}, Last Name: ${person.last}`);
}
printName({ first: "Will", last: "Smith" });

// EXAMPLE: Big objects

type Product = {
  id: number;
  name: string;
  price: number;
  description?: string;
  inStock: boolean;
  categories: string[];
  rating: { score: number; count: number };
};

const product: Product = {
  id: 1,
  name: "Laptop",
  price: 999.99,
  inStock: true,
  categories: ["Electronics", "Computers"],
  rating: { score: 4.5, count: 120 },
};
