interface MyGenericWithDefault<T = string, L = boolean> {
  myTypeWhichIsStringIfNotSpecified: T;
  close: L
}

const myGeneric1: MyGenericWithDefault<number, string> = { myTypeWhichIsStringIfNotSpecified: 123, close: "test" };
const myGeneric2: MyGenericWithDefault = { myTypeWhichIsStringIfNotSpecified: "hello", close: false };
const myGeneric3: MyGenericWithDefault<string> = { myTypeWhichIsStringIfNotSpecified: "world", close: true };