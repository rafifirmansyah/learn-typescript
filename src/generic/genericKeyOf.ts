interface TypeA1 {
  prop1: string;
  prop2: number;
}

function printProps1<T, K extends keyof T>(p1: T, p2: K[]): void { // Extends all properties' name
  console.log("Printing:");
  p2.forEach(propName => {
    console.log(`Name: ${propName} and value: ${p1[propName]}`);
  });
}

let a2: TypeA1 = { prop1: "p1", prop2: 2 };

printProps1(a2, ["prop1"]);
printProps1(a2, ["prop1", "prop2"]);
// printProps1(a2, ["not", "working"]);