// SYNTAX:

// Creating a Map:
// let myMap: Map<KeyType, ValueType> = new Map();

// Methods:
// myMap.set(key: KeyType, value: ValueType): this
// myMap.get(key: KeyType): ValueType | undefined
// myMap.has(key: KeyType): boolean
// myMap.delete(key: KeyType): boolean
// myMap.clear(): void
// myMap.size: number
// myMap.keys(): IterableIterator<KeyType>
// myMap.values(): IterableIterator<ValueType>
// myMap.entries(): IterableIterator<[KeyType, ValueType]>
// myMap.forEach(callback: (value: ValueType, key: KeyType, map: Map<KeyType, ValueType>) => void): void

// ============================================
// EXAMPLES:

// 1. Creating a Map
let userScores: Map<string, number> = new Map();

// 2. Adding entries
userScores.set("Alice", 90);
userScores.set("Bob", 85);

// 3. Getting a value
console.log(userScores.get("Alice")); // 90

// 4. Checking existence
console.log(userScores.has("Charlie")); // false

// 5. Deleting an entry
userScores.delete("Bob");

// 6. Getting the size
console.log(userScores.size); // 1

// 7. Iterating over keys and values
for (let [name, score] of userScores.entries()) {
  console.log(`${name} scored ${score}`);
}

// 8. Using forEach
userScores.forEach((score, name) => {
  console.log(`${name} scored ${score}`);
});

// 9. Map with object keys
interface User {
  id: number;
  name: string;
}

let user1: User = { id: 1, name: "Alice" };
let user2: User = { id: 2, name: "Bob" };

let userMap: Map<User, string> = new Map();
userMap.set(user1, "active");
userMap.set(user2, "inactive");

console.log(userMap.get(user1)); // "active"

// 10. Clearing a Map
userScores.clear();
console.log(userScores.size); // 0
