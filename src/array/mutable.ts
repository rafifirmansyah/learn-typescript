// Explicit
let arrayOfNumber: number[] = [1, 2, 3];
let arrayOfString: string[] = ["string", "array", "only"];
let arrayOfStringOrNumber: (string | number)[] = ["string", "array", "only", 12];
let multipleTypeArray: (number | boolean)[] = [1, true, false];

// Implicit
let arrayOfNumber2 = [1, 2, 3];
let arrayOfString2 = ["string", "array", "only"];
let arrayOfStringOrNumber2 = ["string", "array", "only", 12];
let multipleTypeArray2 = [1, true, 3];

console.log(arrayOfNumber);
console.log(arrayOfString);
console.log(arrayOfStringOrNumber);
console.log(arrayOfNumber2);
console.log(arrayOfString2);
console.log(arrayOfStringOrNumber2);
