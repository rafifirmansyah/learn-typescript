function returnFirstElementInArray4<T>(elements: T[]): T {
  return elements[0];
}

const arr4 = [1, 2, 3];
const bigger = returnFirstElementInArray4(arr4) * 10;
console.log(bigger);

const arr5 = ["Test", "is", "Good"];
const firstArray = returnFirstElementInArray4(arr5);
console.log(firstArray);