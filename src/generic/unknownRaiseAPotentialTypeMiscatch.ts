function returnFirstElementInArray3(elements: unknown[]): unknown {
  if (elements.length > 0) {
    return elements[0];
  }

  return 0;
}

const arr3 = [1, 2, 3];
// const bigger = returnFirstElementInArray3(arr3) * 10; // Does not work: unknown cannot be multiplied by 10
// console.log(bigger);