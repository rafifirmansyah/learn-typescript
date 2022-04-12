const unknownType: unknown = "123";
const cast1: number = <number>unknownType;
const cast2: number = unknownType as number;

console.log(typeof unknownType);
console.log(typeof cast1);
console.log(typeof cast2);
