function functionThrow(): never {
    throw new Error("This function return never");
}

console.log(typeof functionThrow());