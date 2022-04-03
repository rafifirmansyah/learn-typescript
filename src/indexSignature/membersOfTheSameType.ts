interface MyStringDictionaryWithMembers {
  [key: string]: string;
  m1: string;
  // m2: number; // Won't transpile, must be string
  m2: string; // Fixed
}

let map: MyStringDictionaryWithMembers = {
  m1: "value1",
  m2: "value2",
  ["stringHere"]: "String value"
};

console.log(map);
