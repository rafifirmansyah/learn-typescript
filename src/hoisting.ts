// x = "not declared before assignment"; 
// var x = "declared after assignment  and all fine"; 
// console.log(x)

var x: string | undefined = undefined;
x = "not declared before assignment"; 
x = "declared after assignment and all fine"; 

console.log(x);
