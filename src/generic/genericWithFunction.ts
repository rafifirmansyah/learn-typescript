function countElementInArray<T>(elements: T[]): number {
  return elements.length;
}

function returnFirstElementInArray<T>(elements: T[]): T | undefined {
  if (elements.length > 0) {
    return elements[0];
  } 

  return undefined;
}

const arr = [1, 2, 3];
const testArr = [6, 2, 3];

console.log(countElementInArray(arr));
console.log(returnFirstElementInArray(arr));

console.log(countElementInArray(testArr));
console.log(returnFirstElementInArray(testArr));