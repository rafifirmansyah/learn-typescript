const arrayA: Array<string> = new Array("abc", "def");
const test: string = arrayA[0]; // No cast required
console.log(test.substr(0, 1)); // Access to string member
