interface MyThisInterface {
  m1: string[];
  m2: number[];
  functionA(): () => string;
}

let vMyThisInterface: MyThisInterface = {
  m1: ["heart", "spades", "clubs", "diamonds"],
  m2: [1, 2, 3],
  functionA: function () {
    return function(this: MyThisInterface) {
      return this.m1[0];
    }
  }
}

console.log(vMyThisInterface.functionA());