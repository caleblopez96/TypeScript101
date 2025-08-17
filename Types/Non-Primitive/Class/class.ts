// ============================================
// TYPESCRIPT CLASSES - QUICK REFERENCE
// ============================================

// Basic class
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `Hello, I'm ${this.name}`;
  }
}

// Access modifiers
class BankAccount {
  public accountNumber: string; // accessible everywhere (default)
  private balance: number; // only within this class
  protected bankName: string; // this class + subclasses

  constructor(accountNumber: string, balance: number) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.bankName = "MyBank";
  }

  getBalance(): number {
    return this.balance;
  }
}

// Parameter properties (shorthand)
class User {
  constructor(
    public name: string,
    private email: string,
    readonly id: number
  ) {}
}

// Optional & readonly
class Car {
  readonly vin: string;
  description?: string; // optional

  constructor(vin: string, description?: string) {
    this.vin = vin;
    this.description = description;
  }
}

// Static members
class MathUtils {
  static PI = 3.14159;
  static area(radius: number): number {
    return this.PI * radius * radius;
  }
}

// Getters/setters
class Temperature {
  private _celsius: number = 0;

  get celsius(): number {
    return this._celsius;
  }
  set celsius(value: number) {
    this._celsius = value;
  }
}

// Inheritance
class Animal {
  constructor(protected name: string) {}
  move(): string {
    return `${this.name} moves`;
  }
}

class Dog extends Animal {
  constructor(name: string, public breed: string) {
    super(name);
  }

  move(): string {
    return `${this.name} runs`;
  } // override
}

// Abstract classes
abstract class Shape {
  abstract area(): number;
  describe(): string {
    return `Area: ${this.area()}`;
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

// Interfaces
interface Flyable {
  fly(): void;
  altitude: number;
}

class Bird implements Flyable {
  altitude: number = 0;
  fly(): void {
    this.altitude = 100;
  }
}

// Generic classes
class Container<T> {
  private items: T[] = [];
  add(item: T): void {
    this.items.push(item);
  }
  get(index: number): T | undefined {
    return this.items[index];
  }
}

const numbers = new Container<number>();

// Real-world example
class ApiClient {
  constructor(private baseUrl: string) {}

  async get<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${this.baseUrl}${endpoint}`);
    return response.json();
  }
}
