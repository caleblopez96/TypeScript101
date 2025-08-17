// SYNTAX:

// Basic interface:
// interface InterfaceName {
//     property1: Type1;
//     property2: Type2;
//     method1(param: Type): ReturnType;
// }

// Optional properties:
// interface InterfaceName {
//     property?: Type;
// }

// Readonly properties:
// interface InterfaceName {
//     readonly property: Type;
// }

// Extending interfaces:
// interface ChildInterface extends ParentInterface {
//     additionalProperty: Type;
// }

// Implementing interfaces in classes:
// class ClassName implements InterfaceName {
//     property1: Type1;
//     property2: Type2;
//     method1(param: Type): ReturnType { ... }
// }

// ============================================
// EXAMPLES:

// 1. Basic interface
interface Person {
  name: string;
  age: number;
  greet(): string;
}

const alice: Person = {
  name: "Alice",
  age: 30,
  greet() {
    return `Hello, my name is ${this.name}`;
  },
};

// 2. Optional properties
interface Car {
  make: string;
  model: string;
  year?: number; // optional
}

const myCar: Car = { make: "Toyota", model: "Corolla" };

// 3. Readonly properties
interface Point {
  readonly x: number;
  readonly y: number;
}

const origin: Point = { x: 0, y: 0 };
// origin.x = 5; // ❌ Error: Cannot assign to 'x' because it is a read-only property

// 4. Extending interfaces
interface Employee extends Person {
  jobTitle: string;
}

const bob: Employee = {
  name: "Bob",
  age: 25,
  jobTitle: "Developer",
  greet() {
    return `Hi, I'm ${this.name}, a ${this.jobTitle}`;
  },
};

// 5. Interface for function types
interface BinaryOperation {
  (a: number, b: number): number;
}

const add: BinaryOperation = (x, y) => x + y;
const multiply: BinaryOperation = (x, y) => x * y;

// 6. Interface for arrays/objects
interface StringArray {
  [index: number]: string;
}

const fruits: StringArray = ["apple", "banana", "orange"];

// 7. Interface for nested objects
interface Company {
  name: string;
  employees: Person[];
}

const myCompany: Company = {
  name: "Tech Corp",
  employees: [alice, bob],
};
