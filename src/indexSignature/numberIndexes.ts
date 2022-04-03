interface MyStringDictionary {
  [key: number] : string; // Only string is accepted for each number (identifier)
}

const disc1: MyStringDictionary = { [100]: "hundred", [200]: "two hundred" };

console.log(disc1);