// Enum type string
enum MyStringEnum {
  ChoiceA = "A",
  ChoiceB = "B",
}

// Enum mixed type
enum MyStringAndNumberEnum {
  ChoiceA, // 0
  ChoiceB = "B",
  ChoiceC = 100
}

console.log(MyStringEnum);
console.log(MyStringAndNumberEnum);