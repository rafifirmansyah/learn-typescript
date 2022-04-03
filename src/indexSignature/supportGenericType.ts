interface MyGenericDictionary<T> { // Generic for the value
  [id: string]: T; // The type T is the only accepted value
}

const disc2: MyGenericDictionary<string> = { ["100"]: "hundred", ["200"]: "two hundred" };
const disc3: MyGenericDictionary<number> = { ["100"]: 100, ["200"]: 200 };

console.log(disc2);
console.log(disc3);