interface IMyInterfaceWithConstructor<T> {
  new(param: string): T; // Force to have a constructor with the signature of 1 parameter that is a string 
}

function createInstance<T>(ctor: IMyInterfaceWithConstructor<T>, param1: string): T { // Create a new type
  return new ctor(param1);
}

class C1 {
  constructor(name: string) { // We can create from createInstance function because 1 parameter and string
    console.log("Initializing class C1 with string: " + name);
  }
}

class C2 {
  constructor(name: string) { // We can create from createInstance function because 1 parameter and string
    console.log("Initializing class C2 with string: " + name);
  }
}

const inst1 = createInstance(C1, "Instance 1");
const inst2 = createInstance(C2, "Instance 2");