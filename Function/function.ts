/* Regular Function Declaration: */
// SYNTAX:
function functionName(paramName: ParamType): ReturnType {
  // function body
  // return
}

// EXAMPLE:
function square1(num: number): number {
  return num * num;
}

/* ------------------------------------------- */

/* Arrow Function Expression */
// SYNTAX:
const functionName = (paramName: ParamType): ReturnType => {
  // function body
  // return
};

// EXAMPLE:
const sqaure2 = (num: number): number => {
  return num * num;
};

// EXAMPLE SHORTHAND:
const square3 = (num: number): number => num * num;

/* ------------------------------------------- */

/* ASYNC */
// SYNTAX:
async function functionName(paramName: ParamType): Promise<ReturnType> {
  // function body
  // return
}

// EXAMPLE:
async function fetchData(url: string): Promise<string> {
  const response = await fetch(url);
  return await response.text();
}

/* ------------------------------------------- */

/* Default Parameter */
function greeting(person: string = "Stranger") {
  return `Hello there, ${person}`;
}
