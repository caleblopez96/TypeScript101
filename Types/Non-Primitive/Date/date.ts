// ============================================
// TYPESCRIPT DATE OBJECT - CHEATSHEET
// ============================================

// SYNTAX:

// Create a new Date:
// let dateVar: Date = new Date();

// Create with a date string:
// let dateVar: Date = new Date("2025-08-16T12:00:00Z");

// Create with year, month, day, hour, minute, second:
// let dateVar: Date = new Date(2025, 7, 16, 12, 0, 0); // Month is 0-based (0 = Jan)

// ============================================
// EXAMPLES:

// 1. Current date and time
let now: Date = new Date();
console.log(now);

// 2. Specific date
let birthday: Date = new Date("1990-05-01");
console.log(birthday);

// 3. Using numeric components
let meeting: Date = new Date(2025, 7, 16, 14, 30, 0); // August 16, 2025 14:30
console.log(meeting);

// 4. Get date components
console.log(now.getFullYear()); // 2025
console.log(now.getMonth()); // 0-based (0 = Jan, 7 = Aug)
console.log(now.getDate()); // Day of month
console.log(now.getDay()); // Day of week (0 = Sun)
console.log(now.getHours()); // Hours
console.log(now.getMinutes()); // Minutes
console.log(now.getSeconds()); // Seconds
console.log(now.getMilliseconds()); // Milliseconds

// 5. Set date components
let eventDate: Date = new Date();
eventDate.setFullYear(2026);
eventDate.setMonth(0); // January
eventDate.setDate(15);
eventDate.setHours(10);
eventDate.setMinutes(0);
eventDate.setSeconds(0);
console.log(eventDate);

// 6. Date math
let tomorrow: Date = new Date();
tomorrow.setDate(tomorrow.getDate() + 1); // add 1 day
console.log(tomorrow);

// 7. Convert to string formats
console.log(now.toDateString()); // "Sat Aug 16 2025"
console.log(now.toTimeString()); // "12:00:00 GMT-0700 (Pacific Daylight Time)"
console.log(now.toISOString()); // "2025-08-16T19:00:00.000Z"
console.log(now.toLocaleDateString()); // e.g., "8/16/2025"
console.log(now.toLocaleTimeString()); // e.g., "12:00:00 PM"
