// Classes are blueprints for creating objects with properties and methods.

// Define a class using the `class` keyword.
// Properties are declared with type annotations.
// Methods are functions inside the class.

// SYNTAX:
// class ClassName {
// propertyName: type;
// constructor(parameters) { ... }
// methodName(parameters) { ... }
// }

// TypeScript lets you declare and assign properties directly in the constructor:

```Typescript
// EXAMPLE: Declaring and assigning properties in constructor
class Car {
  constructor(public make: string, public model: string, public year: number) {}

  describe() {
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
  }
}

const car1 = new Car("Honda", "Civic", 2018);
car1.describe();
```

```Typescript
// EXAMPLE: Traditional property declaration
class Car {
  public make: string;
  public model: string;
  public year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  describe() {
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
  }
}

const car2 = new Car("Toyota", "Corolla", 2020);
car2.describe();
```
