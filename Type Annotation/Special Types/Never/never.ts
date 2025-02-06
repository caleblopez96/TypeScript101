// The never type represents values that never occur.

// it might be used to annotate a function that always throws an exception or a func that never finishes executing

// EXAMPLE: function that doesnt stop running
const neverStop = (): never => {
  while (true) {
    console.log("I'm still going!");
  }
};

// EXAMPLE: function that throws exception
const giveError = (msg: string): never => {
  throw new Error(msg);
};
