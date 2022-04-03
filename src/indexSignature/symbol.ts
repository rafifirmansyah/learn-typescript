const SERIALIZE_1 = Symbol("serialize-method-key"); // Symbol
const SERIALIZE_2 = "serialize-method-key"; // Constant

const o1 = { [SERIALIZE_1]: "1", [SERIALIZE_2]: "2" };

let s1: string = o1[SERIALIZE_1];
let s2: string = o1[SERIALIZE_2];

console.log(s1);
console.log(s2);

const SERIALIZE1 = Symbol("serialize-method-key"); // Symbol
interface Serializeble1 {
  [SERIALIZE1]: string;
}

let serial1: Serializeble1 = { [SERIALIZE1]: "hello" }
console.log(serial1);

