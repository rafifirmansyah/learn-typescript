interface MyStringDictionaryWithMembers3 {
  [key: number]: string;
  m1: string;
  m2: number;
  m3: boolean;
  m4: { x: string, y: number }
}

let objectIndex: { x: number; y: string; } = { x: 1, y: "2" };
objectIndex["x"] = 2;
objectIndex["y"] = "a string";
// objectIndex[0] = 1 // Doesn't transpile
// objectIndex[{x: 1}] = 123 // Doesn't transpile

console.log(objectIndex);