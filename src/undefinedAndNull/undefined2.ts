// This code will work before TypeScript 2.0
let numberOnlyNotNullOrUndefined: number = 123;
// numberOnlyNotNullOrUndefined = null;
// numberOnlyNotNullOrUndefined = undefined;

// console.log(numberOnlyNotNullOrUndefined);

// With UNION
let numberOnlyNotNullOrUndefined2: number | null | undefined = 123;
numberOnlyNotNullOrUndefined2 = null;
numberOnlyNotNullOrUndefined2 = undefined;
console.log(numberOnlyNotNullOrUndefined2);