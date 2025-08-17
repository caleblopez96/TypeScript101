// ============================================
// TYPESCRIPT OBJECTS - COMPLETE REFERENCE
// ============================================

// ==========================================
// 1. BASIC OBJECT TYPES (Inline)
// ==========================================

// Simple object with inline type annotation
let person: { name: string; age: number } = {
  name: "caleb",
  age: 28,
};

let coordinate: { x: number; y: number } = { x: 36, y: 2 };

// ==========================================
// 2. OPTIONAL PROPERTIES
// ==========================================

// Use ? to make properties optional
let user: { name: string; email?: string; phone?: string } = {
  name: "caleb",
  // email and phone are optional
};

// ==========================================
// 3. READONLY PROPERTIES
// ==========================================

let config: { readonly apiKey: string; timeout: number } = {
  apiKey: "abc123",
  timeout: 5000,
};
// config.apiKey = "new key"; // ❌ Error: Cannot assign to readonly property

// ==========================================
// 4. OBJECTS AS FUNCTION PARAMETERS
// ==========================================

// Inline object type in function parameter
function printName3(person: { first: string; last: string }): void {
  console.log(`${person.first} ${person.last}`);
}

printName3({ first: "Will", last: "Smith" });

// Function with optional properties
function createUser(data: { name: string; email?: string; age?: number }) {
  return { id: Date.now(), ...data };
}

// ==========================================
// 5. TYPE ALIASES (Recommended for complex objects)
// ==========================================

// Define reusable type alias for complex objects
type Product = {
  id: number;
  name: string;
  price: number;
  description?: string;
  inStock: boolean;
  categories: string[];
  rating: { score: number; count: number }; // nested object
  metadata?: { [key: string]: any }; // index signature
};

const laptop: Product = {
  id: 1,
  name: "MacBook Pro",
  price: 1999.99,
  inStock: true,
  categories: ["Electronics", "Computers", "Apple"],
  rating: { score: 4.8, count: 245 },
};

// ==========================================
// 6. METHODS IN OBJECTS
// ==========================================

type Calculator = {
  value: number;
  add: (n: number) => number;
  subtract(n: number): number; // alternative method syntax
  multiply: (n: number) => Calculator; // method chaining
};

const calc: Calculator = {
  value: 0,
  add: (n) => calc.value + n,
  subtract(n) {
    return this.value - n;
  },
  multiply: (n) => ({ ...calc, value: calc.value * n }),
};

// ==========================================
// 7. INDEX SIGNATURES (Dynamic Properties)
// ==========================================

type Settings = {
  theme: "light" | "dark";
  language: string;
  [key: string]: any; // allows any additional string properties
};

const userSettings: Settings = {
  theme: "dark",
  language: "en",
  notifications: true, // Allowed by index signature
  customColor: "#ff0000", // Also allowed
};

// ==========================================
// 8. UNION TYPES WITH OBJECTS
// ==========================================

type Circle = { kind: "circle"; radius: number };
type Rectangle = { kind: "rectangle"; width: number; height: number };
type Shape = Circle | Rectangle;

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "rectangle":
      return shape.width * shape.height;
  }
}

// ==========================================
// 9. INTERFACE VS TYPE (When to use what)
// ==========================================

// Use INTERFACE when:
interface User {
  id: number;
  name: string;
}

// Interfaces can be extended
interface AdminUser extends User {
  permissions: string[];
}

// Interfaces can be merged (declaration merging)
interface User {
  email?: string; // This gets merged with the User interface above
}

// Use TYPE when:
// - Creating unions, intersections, or computed types
// - You need more advanced type operations
type Status = "loading" | "success" | "error";
type UserWithStatus = User & { status: Status };

// ==========================================
// 10. UTILITY TYPES FOR OBJECTS
// ==========================================

type PartialUser = Partial<User>; // All properties become optional
type RequiredUser = Required<User>; // All properties become required
type UserEmail = Pick<User, "email">; // Pick specific properties
type UserWithoutId = Omit<User, "id">; // Exclude specific properties

// ==========================================
// 11. COMMON PATTERNS & BEST PRACTICES
// ==========================================

// DO: Use type aliases for complex/reusable object types
type ApiResponse<T> = {
  data: T;
  status: number;
  message: string;
  timestamp: Date;
};

// DO: Use readonly for immutable data
type ImmutableUser = {
  readonly id: number;
  readonly createdAt: Date;
  name: string;
};

// DO: Use optional properties appropriately
type CreateUserRequest = {
  name: string;
  email: string;
  avatar?: string; // Optional because it has a default
};

// DON'T: Use inline types for complex objects
// let complexObject: { prop1: string; prop2: { nested: boolean; items: string[] } } = ...

// ==========================================
// 12. REAL-WORLD EXAMPLE
// ==========================================

type BlogPost = {
  readonly id: string;
  title: string;
  content: string;
  author: {
    name: string;
    email: string;
    avatar?: string;
  };
  tags: string[];
  publishedAt?: Date;
  updatedAt: Date;
  status: "draft" | "published" | "archived";
  metadata: {
    views: number;
    likes: number;
    [customField: string]: any;
  };
};

const myPost: BlogPost = {
  id: "post-123",
  title: "TypeScript Objects Guide",
  content: "A comprehensive guide to TypeScript objects...",
  author: {
    name: "Caleb",
    email: "caleb@example.com",
  },
  tags: ["typescript", "tutorial", "programming"],
  updatedAt: new Date(),
  status: "published",
  metadata: {
    views: 1250,
    likes: 89,
    featured: true,
  },
};
