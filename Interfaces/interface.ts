// Exercise 2: Interface + Closure – “Bank Account”

// Task: Create a function createBankAccount that returns an object with these methods:

// deposit(amount: number): number → adds money to the account and returns the new balance

// withdraw(amount: number): number → subtracts money and returns the new balance (cannot go below 0)

// getBalance(): number → returns the current balance

// Requirements:

// The balance should not be directly accessible (use closure)

// Use a TypeScript interface for the return type

// Example:

// const account = createBankAccount();

// console.log(account.deposit(100)); // 100
// console.log(account.withdraw(30)); // 70
// console.log(account.getBalance());  // 70

// Hints:

// Define an interface BankAccount with the three methods.

// Use a private variable inside the function to store the balance.

// Make sure withdraw never lets balance go negative.

interface BankAccount {
    deposit(amount: number): number;
    withdraw(amount: number): number;
    getBalance(): number;
}

function createBankAccount(): BankAccount {
    let balance = 0;
    return {
        deposit: function (amount: number) {
            return (balance += amount);
        },
        withdraw: function (amount: number) {
            if (amount > balance) {
                throw new Error("Insufficient funds");
            }
            return (balance -= amount);
        },
        getBalance: function () {
            return balance;
        },
    };
}
