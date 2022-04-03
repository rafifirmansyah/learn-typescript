interface MyTypeA {
  [k: string]: string;
}

// interface MyTypeB {
//   [k: "id1" | "id2"]: string
// }

type AllowedKey = "Id1" | "Id2";
type MyTypeC = {
  [k in AllowedKey]: string;
};

let typeC: MyTypeC = { "Id1": "123", "Id2": "ABC" };
console.log(typeC);
