let list: ReadonlyArray<number> = [1, 2];
// list.push(3);
// console.log(list);

let list2: readonly number[] = [1, 2];
// list2.push(3);
// console.log(list2);

// Different between constant array with read-only
const listX: number[] = [1, 2];
listX.push(3); 
// listX = [3, 2, 1]; Cannot re-assigned value

console.log(listX);

let listY: readonly number[] = [1, 2];
// listY.push(3); // Cannot modify each value or push value
listY = [3, 2, 1]; 