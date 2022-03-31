function genericInferred2<T extends string>(param: T) {
  return param.length;
}

console.log(genericInferred2("Four"));
// genericInferred2(12)
type UUID = string;
let id: UUID = "123-456";
console.log(genericInferred2(id));