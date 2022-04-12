interface ITypeA { m1: string }
interface ITypeB extends ITypeA { m2: string }
interface ITypeC extends ITypeB { m3: string }

const typeA: ITypeA = { m1: "m1" };
const typeB: ITypeB = { m1: "m1", m2: "m2" };

let typeB2: ITypeB = typeA as ITypeB; // Work (m2 will be missing!!!) 
let typeA2: ITypeA = typeB; // No cast needed
console.log(typeB2);
console.log(typeA2); // { m1: "m1", m2: "m2" } However, only m1 is accessible at compilation
// let m2 = typeA2.m2
