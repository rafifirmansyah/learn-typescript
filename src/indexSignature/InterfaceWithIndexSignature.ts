interface MyStringDictionaryWithMembers4 {
  [key: string]: string | number;
  m1: string;
}

interface MySecondInterface {
  m2: number;
}

// Concat 2 Interface become 1 type
type Intersect = MyStringDictionaryWithMembers4 & MySecondInterface;

let m: Intersect = {
  m1: "m1 value",
  m2: 21,
  ["AString"]: "AnotherString"
};

class MyClass4 implements Intersect {
  [key: string]: string | number;
  m1: string;
  m2: number;

  constructor() {
    this.m1 = "";
    this.m2 = 0;
  }
}