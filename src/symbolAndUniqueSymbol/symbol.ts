let v1 = "value1";
let v2 = "value1";

if (v1 === v2) {
  console.log("Equal with string"); // This will print
}

let sym1 = Symbol("value1");
let sym2 = Symbol("value1");

if (sym1 === sym2) {
  console.log("Equal when symbol"); // This will not print, they are not equal
}


