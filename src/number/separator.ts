const numberSeparator1 = 560000067;
const numberSeparator2 = 560_000_067;
const numberSeparator3 = 5_6_0_000_0_6_7;
const numberSeparator4 = Number(5_000);
const numberSeparator5 = Number("5_000"); // NaN
const numberSeparator6 = parseInt("5_000");
const numberSeparator7 = 0xFAB_F00D;
const numberSeparator8 = 0b1111_111110000_11110000_00001100;

console.log(numberSeparator1);
console.log(numberSeparator2);
console.log(numberSeparator3);
console.log(numberSeparator4);
console.log(numberSeparator5);
console.log(numberSeparator6);
console.log(numberSeparator7);
console.log(numberSeparator8);