let aSymbol: Symbol = Symbol("Value1");
aSymbol = Symbol("Value2"); // Type is: Symbol

const aSecondSymbol: Symbol = Symbol("Value3"); // Type is: Symbol
// Unique Symbol can only declared with const
const aThirdSymbol: unique symbol = Symbol("Value3"); // Type is: typeof(aThirdSymbol) 

console.log(typeof aSymbol);
console.log(typeof aSecondSymbol);
console.log(typeof aThirdSymbol);