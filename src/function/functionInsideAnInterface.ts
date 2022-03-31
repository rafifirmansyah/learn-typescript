interface MyInterface {
  myFunction: (p1: number) => void;
}

let myInterfaceWithDiffParams: MyInterface = {
  myFunction: (anotherNameForP1: number) => {
    console.log(`The parameter is ${anotherNameForP1}`);
  }
}

myInterfaceWithDiffParams.myFunction(100);