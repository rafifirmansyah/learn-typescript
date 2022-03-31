var functionX = () => { // Example of "fat arrow function"
  let variable1 = 1;
  var function2 = () => {
    let variable2 = 2;
    console.log(variable1 + variable2); // Access variable from function 1
  };
  function2();
};
functionX();