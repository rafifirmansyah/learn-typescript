class MyPrivateFunctionClass {
  constructor() {
    this.privateFunction();
  }

  // Old private for encapsulation
  private privateFunction(): void {
    console.log("From the private function");
  }

  // New private for encapsulation
  #hello(): void {
    console.log("HELLOW");
  }
}

const accessPrivateFunction = new MyPrivateFunctionClass();
// c. // There is nothing to invoke because the function is private