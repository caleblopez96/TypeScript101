# TypeScript 101 Cheatsheet

## Table of Contents

- [Basic Types](#basic-types)
- [Variables & Constants](#variables--constants)
- [Functions](#functions)
- [Arrays](#arrays)
- [Objects](#objects)
- [Interfaces](#interfaces)
- [Classes](#classes)
- [Generics](#generics)
- [Union & Intersection Types](#union--intersection-types)
- [Type Assertions](#type-assertions)
- [Enums](#enums)
- [Modules](#modules)
- [Utility Types](#utility-types)

## Basic Types

```typescript
// Primitives
let name: string = "John";
let age: number = 30;
let isActive: boolean = true;
let data: any = "anything";
let nothing: void = undefined;
let empty: null = null;
let notDefined: undefined = undefined;

// Arrays
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"];

// Tuple
let person: [string, number] = ["John", 30];

// Object
let user: object = { name: "John", age: 30 };
```

## Variables & Constants

```typescript
// Variable declarations
let mutableVar: string = "can change";
const immutableVar: string = "cannot change";
var oldStyle: string = "avoid using var";

// Type inference
let inferredString = "TypeScript infers this is a string";
let inferredNumber = 42;
```

## Functions

```typescript
// Basic function
function greet(name: string): string {
  return `Hello, ${name}!`;
}

// Arrow function
const add = (a: number, b: number): number => a + b;

// Optional parameters
function buildName(firstName: string, lastName?: string): string {
  return lastName ? `${firstName} ${lastName}` : firstName;
}

// Default parameters
function createUser(name: string, age: number = 18): object {
  return { name, age };
}

// Rest parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

// Function overloads
function format(value: string): string;
function format(value: number): string;
function format(value: string | number): string {
  return value.toString();
}
```

## Arrays

```typescript
// Array declaration
let fruits: string[] = ["apple", "banana", "orange"];
let scores: Array<number> = [95, 87, 92];

// Mixed types
let mixed: (string | number)[] = ["hello", 42, "world"];

// Array methods with types
let doubled = numbers.map((n: number) => n * 2);
let filtered = numbers.filter((n: number) => n > 5);
```

## Objects

```typescript
// Object type annotation
let user: { name: string; age: number; email?: string } = {
  name: "John",
  age: 30,
};

// Index signatures
let scores: { [subject: string]: number } = {
  math: 95,
  science: 87,
};

// Nested objects
let company: {
  name: string;
  address: {
    street: string;
    city: string;
  };
} = {
  name: "TechCorp",
  address: {
    street: "123 Main St",
    city: "Boston",
  },
};
```

## Interfaces

```typescript
// Basic interface
interface User {
  name: string;
  age: number;
  email?: string; // Optional property
  readonly id: number; // Read-only property
}

// Using interface
const user: User = {
  id: 1,
  name: "John",
  age: 30,
};

// Function interface
interface Calculator {
  (a: number, b: number): number;
}

const add: Calculator = (x, y) => x + y;

// Interface inheritance
interface Employee extends User {
  department: string;
  salary: number;
}

// Interface with methods
interface Animal {
  name: string;
  makeSound(): void;
}

class Dog implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log("Woof!");
  }
}
```

## Classes

```typescript
// Basic class
class Person {
  private name: string;
  protected age: number;
  public email: string;

  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  getName(): string {
    return this.name;
  }

  // Static method
  static createGuest(): Person {
    return new Person("Guest", 0, "guest@example.com");
  }
}

// Inheritance
class Employee extends Person {
  private department: string;

  constructor(name: string, age: number, email: string, department: string) {
    super(name, age, email);
    this.department = department;
  }

  getDepartment(): string {
    return this.department;
  }
}

// Abstract class
abstract class Shape {
  abstract area(): number;

  display(): void {
    console.log(`Area: ${this.area()}`);
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  area(): number {
    return Math.PI * this.radius ** 2;
  }
}
```

## Generics

```typescript
// Generic function
function identity<T>(arg: T): T {
  return arg;
}

let stringResult = identity<string>("hello");
let numberResult = identity<number>(42);

// Generic interface
interface Container<T> {
  value: T;
  getValue(): T;
}

class Box<T> implements Container<T> {
  constructor(public value: T) {}

  getValue(): T {
    return this.value;
  }
}

// Generic constraints
interface Lengthwise {
  length: number;
}

function logLength<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

// Multiple type parameters
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}
```

## Union & Intersection Types

```typescript
// Union types
type StringOrNumber = string | number;
let value: StringOrNumber = "hello";
value = 42; // Also valid

function formatValue(input: string | number): string {
  if (typeof input === "string") {
    return input.toUpperCase();
  }
  return input.toString();
}

// Intersection types
interface Name {
  name: string;
}

interface Age {
  age: number;
}

type Person = Name & Age;

const person: Person = {
  name: "John",
  age: 30,
};

// Discriminated unions
interface Square {
  kind: "square";
  size: number;
}

interface Circle {
  kind: "circle";
  radius: number;
}

type Shape = Square | Circle;

function area(shape: Shape): number {
  switch (shape.kind) {
    case "square":
      return shape.size ** 2;
    case "circle":
      return Math.PI * shape.radius ** 2;
  }
}
```

## Type Assertions

```typescript
// Type assertion (angle bracket syntax)
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

// Type assertion (as syntax - preferred)
let someValue2: any = "this is a string";
let strLength2: number = (someValue2 as string).length;

// Non-null assertion
function processUser(user?: User) {
  // We know user is defined at this point
  console.log(user!.name);
}
```

## Enums

```typescript
// Numeric enum
enum Direction {
  Up, // 0
  Down, // 1
  Left, // 2
  Right, // 3
}

let dir: Direction = Direction.Up;

// String enum
enum Color {
  Red = "red",
  Green = "green",
  Blue = "blue",
}

// Heterogeneous enum (not recommended)
enum Mixed {
  No = 0,
  Yes = "yes",
}

// Const enum (inlined at compile time)
const enum Status {
  Pending = "pending",
  Approved = "approved",
  Rejected = "rejected",
}
```

## Modules

```typescript
// Exporting
export interface User {
  name: string;
  age: number;
}

export class UserService {
  getUser(): User {
    return { name: "John", age: 30 };
  }
}

export default class Logger {
  log(message: string): void {
    console.log(message);
  }
}

// Importing
import { User, UserService } from "./user";
import Logger from "./logger";
import * as Utils from "./utils";

// Re-exporting
export { User } from "./user";
export * from "./constants";
```

## Utility Types

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

// Partial - makes all properties optional
type PartialUser = Partial<User>;
// { id?: number; name?: string; email?: string; age?: number; }

// Required - makes all properties required
type RequiredUser = Required<PartialUser>;

// Pick - select specific properties
type UserPreview = Pick<User, "id" | "name">;
// { id: number; name: string; }

// Omit - exclude specific properties
type UserWithoutId = Omit<User, "id">;
// { name: string; email: string; age: number; }

// Record - create object type with specific keys and values
type UserRoles = Record<"admin" | "user" | "guest", boolean>;
// { admin: boolean; user: boolean; guest: boolean; }

// ReturnType - extract return type of function
function getUser(): User {
  return { id: 1, name: "John", email: "john@example.com", age: 30 };
}
type UserReturnType = ReturnType<typeof getUser>; // User

// Parameters - extract parameter types of function
function createUser(name: string, age: number): User {
  return { id: 1, name, email: "", age };
}
type CreateUserParams = Parameters<typeof createUser>; // [string, number]
```

## Quick Reference

### Type Declarations

```typescript
// Variable
let name: string;

// Function parameter
function greet(name: string) {}

// Function return type
function getName(): string {}

// Object property
const user: { name: string } = { name: "John" };
```

### Common Patterns

```typescript
// Optional chaining
user?.profile?.address?.street;

// Nullish coalescing
const name = user.name ?? "Anonymous";

// Type guards
function isString(value: any): value is string {
  return typeof value === "string";
}

// Conditional types
type IsArray<T> = T extends any[] ? true : false;
```

### Configuration (tsconfig.json)

```json
{
  "compilerOptions": {
    "target": "es2020",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

---

**Remember:** TypeScript is all about adding type safety to JavaScript. Start with basic types and gradually incorporate more advanced features as you become comfortable with the syntax.
