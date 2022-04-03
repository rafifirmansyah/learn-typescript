const Foo = "Foo"; // Constant value
const Bar = "Bar"; // Constant value
const Zaz = "Zaz"; // Constant value

const objectWithConstantProperties = { [Foo]: 100, [Bar]: "hello", [Zaz]: () => {}};

let a12: number = objectWithConstantProperties[Foo];
let b2334: string = objectWithConstantProperties[Bar];

console.log(a12);
console.log(b2334);

const objNoConst: { [id: string]: number } = { ["key1"]: 1 };

objNoConst["key2"] = 2;

console.log(objNoConst["key1"]);
console.log(objNoConst["key2"]);
console.log(objNoConst["key11"]);