interface TypeA {
  prop1: string;
  prop2: number;
}

interface TypeB {
  prop1: string;
  prop3: boolean;
}

interface TypeC extends TypeA {
  prop4: number;
}

function printProps<T, K extends T>(p1: T, p2: K): void { // K must have all field from T at minimum
  console.log(p1);
  console.log(p2);
}

let a1: TypeA = { prop1: "p1", prop2: 2 };
let b1: TypeB = { prop1: "p1", prop3: true };
let c1: TypeC = { prop1: "p1", prop2: 2, prop4: 4 };

// printProps(a1, b1); // Does not transpile because B does not extends A
printProps(a1, c1);