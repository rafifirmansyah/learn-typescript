interface ICast1 { m1: string };
interface ICast2 { m1: string, m2: string };
let icast1: ICast1 = { m1: "m1" };
let icast2: ICast2 = { m1: "m1", m2: "m2"};
let icast3: ICast1 = icast2; // work without cast because of the structure

console.log(icast1);
console.log(icast2);
console.log(icast3);

// icast2 = icast1; // doesn't work, miss a member
let icast4: ICast2 = icast1 as ICast2; // work but m2 undefined
console.log(icast4); // { m1: 'm1' } // m2 is missing even if not optional
