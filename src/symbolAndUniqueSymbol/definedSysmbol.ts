const prop1 = Symbol();
const object1 = { [prop1]: "p1" }; // Index signature

// console.log(obj.prop1); // Does not compile
console.log(object1[prop1]);