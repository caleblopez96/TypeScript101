// if you declare a variable but do not initialize it, ts will automatically assign it type any.

// to avoid this, declare the type:

// EXAMPLE:
const states: string[] = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
  "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
  "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
  "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
  "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
];

//! DONT:
// let foundState; --> implicitly receives type of any

//* DO:
let foundState: string | undefined; // avoiding implicit any 

for(let state of states) {
  states.includes("Arizona") ? foundState = "Arizona" : "Does not contain"
}

console.log(foundState);  // Arizona
