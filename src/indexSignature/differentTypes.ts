interface MyStringDictionaryWithMember2 {
  [key: string]: string | number;
  m1: string;
  m2: string;
}

const disc5: MyStringDictionaryWithMember2 = {
  m1: "Hello",
  m2: "World",
  "lorem": 123,
  "ipsum": "Yes"
};

console.log(disc5);