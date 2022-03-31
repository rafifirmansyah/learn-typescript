let variable3: unknown;
variable3 = "It is a string";
console.log(typeof variable3); // String, but cannot use properties or methods from string data type
let variable3String = variable3 as string; // Casting to string
console.log(typeof variable3String);
console.log(variable3String.substr(0, 2));
