function countElementInArray2(elements: unknown[]): number {
  return elements.length;
}

function returnFirstElementInArray2(elements: unknown[]): unknown | undefined {
  if (elements.length > 0) {
    return elements[0];
  }

  return undefined;
}

const arr2 = [1, 2, 3];
console.log(countElementInArray2(arr2));
console.log(returnFirstElementInArray2(arr2));