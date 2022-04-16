enum EnumA {
  ChoiceA,
}

// If same name of enum, TypeScript automaticly merge that enum
enum EnumA {
  ChoiceB = 1,
}

let variableEnum1: EnumA = EnumA.ChoiceA;
console.log(variableEnum1);
variableEnum1 = EnumA.ChoiceB;
console.log(variableEnum1);
