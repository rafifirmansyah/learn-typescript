interface MyStringDictionaryWithTwoMap {
  [key: number]: string;
  [key: string]: string;
  // [key: string]: number; // Doesn't transpile
}

const disc4 = { ["100"]: "hundred", [200]: "two hundred" };

console.log(disc4)