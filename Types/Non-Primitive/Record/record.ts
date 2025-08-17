// ============================================
// TYPESCRIPT RECORD<K, V> - CHEATSHEET
// ============================================

// SYNTAX:

// Basic Record type:
// let myRecord: Record<KeyType, ValueType> = {
//     key1: value1,
//     key2: value2
// };

// KeyType is usually `string` | `number` | `symbol` or a union of literal types
// ValueType can be any type

// ============================================
// EXAMPLES:

// 1. Basic Record
let scores: Record<string, number> = {
  Alice: 90,
  Bob: 85,
};
console.log(scores.Alice); // 90

// 2. Record with number keys
let idMap: Record<number, string> = {
  1: "Alice",
  2: "Bob",
};
console.log(idMap[1]); // "Alice"

// 3. Record with literal union keys
type Role = "admin" | "user" | "guest";
let permissions: Record<Role, string[]> = {
  admin: ["read", "write", "delete"],
  user: ["read", "write"],
  guest: ["read"],
};
console.log(permissions.user); // ["read", "write"]

// 4. Record with object values
type Person = { name: string; age: number };
let people: Record<string, Person> = {
  p1: { name: "Alice", age: 30 },
  p2: { name: "Bob", age: 25 },
};
console.log(people.p2.name); // "Bob"

// 5. Iterating over a Record
for (let key in scores) {
  console.log(`${key}: ${scores[key]}`);
}

// 6. Using Record with mapped types
type Names = "Alice" | "Bob" | "Charlie";
type Ages = Record<Names, number>;
const ages: Ages = { Alice: 30, Bob: 25, Charlie: 28 };
console.log(ages.Charlie); // 28
