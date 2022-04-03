interface MyStringDictionaryWithMembersObjectOriented {
  [key: string]: string;
  m1: string;
  m2: string;
}

class MyMap implements MyStringDictionaryWithMembersObjectOriented {
  constructor() {
    this.m1 = "";
    this.m2 = "";
  }
  [key: string]: string;
  m1: string;
  m2: string;
}

let myMap = new MyMap();

myMap.m1 = "M1Value";
myMap.m2 = "M2Value";
myMap["key1"] = "val1";
myMap["key2"] = "val2";

console.log(myMap);
