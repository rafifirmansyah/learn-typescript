let listA: number[] = [1, 2, 3];
listA.push(4); // Can only push number
console.log(listA);

let listB: any[] = [1, 2, 3];
listB.push("Here is a string"); 
console.log(listB); // You can push any type of value
