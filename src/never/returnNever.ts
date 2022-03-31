function functionReturnNever(): never {
    throw Error("Error Message");
}

let s: string = "A string";
// let n: never = s // A string is not a subtype of never
let n: never;

try {
    n = functionReturnNever();
    s = n; // Assignable because never is a subtype
} catch (e) {
    console.log(e);
}