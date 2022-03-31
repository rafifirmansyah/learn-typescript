interface InterfaceGenericDefinedTwoPlace<T = string> {
  myProp: T;
}

interface InterfaceGenericDefinedTwoPlace<T> {}
interface InterfaceGenericDefinedTwoPlace {}

let xyz: InterfaceGenericDefinedTwoPlace = { myProp: "stringHere"};

console.log(xyz);