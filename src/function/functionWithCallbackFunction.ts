function functReturnVoid(f: () => void): void {
  const c: void = f(); // c is "void" but will store a string
  console.log(c); // Print the string from the return of the function in parameter
}

functReturnVoid(() => {
  return "I am a string, not void!"; // Call back return a string but defined to return void in the definition
});