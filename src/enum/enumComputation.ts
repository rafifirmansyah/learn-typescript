/*
enum MyEnum {
    ChoiceA,
    ChoiceB,
    ChoiceC,
} */

// Became in JavaScript:

// var MyEnum;
// (function (MyEnum) {
//   MyEnum[MyEnum["ChoiceA"] = 0] = "ChoiceA";
//   MyEnum[MyEnum["ChoiceB"] = 1] = "ChoiceB";
//   MyEnum[MyEnum["ChoiceC"] = 2] = "ChoiceC";
// })(MyEnum || (MyEnum = {}));

/*
enum MyEnum2 {
    ChoiceA, // 0
    ChoiceB = 100, // 100
    ChoiceC, // 101
    ChoiceD = MyEnum.ChoiceC, // 2
}
*/

// Became in JavaScript
// var MyEnum2;
// (function (MyEnum2) {
//   MyEnum2[MyEnum2["ChoiceA"] = 0] = "ChoiceA";
//   MyEnum2[MyEnum2["ChoiceB"] = 100] = "ChoiceB";
//   MyEnum2[MyEnum2["ChoiceC"] = 101] = "ChoiceC";
//   MyEnum2[MyEnum2["ChoiceD"] = 2] = "ChoiceD";
// })(MyEnum2 || (MyEnum2 = {}));
