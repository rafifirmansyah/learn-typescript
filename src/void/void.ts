function executeFunctionWithoutReturnType(): void {
    // undefined means void
    return undefined;
}

let returnType = executeFunctionWithoutReturnType();
console.log(returnType);