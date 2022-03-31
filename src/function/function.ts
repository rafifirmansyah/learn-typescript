function fctNamedFunction1() { // Named function
  console.log("Named function 1");
}

let func1 = function fctNamedFunction2() { // Named function
  console.log("Named function 2");
}

let func2 = function () { // Anonymous Function
  console.log("Anonymous Function 1");
}

// (function () { // Anonymous Function + Automatically invoked
//   console.log("Anonymous Function 2");
// })();

fctNamedFunction1();
// fctNamedFunction2();
func1();
func2();
