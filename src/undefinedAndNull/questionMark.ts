function functionWithUndefinedParameter(a: number | undefined, b: number) {}

functionWithUndefinedParameter(1,2);
functionWithUndefinedParameter(undefined, 2);
// functionWithUndefinedParameter(, 2);

// ? = optional paramater
function functionWithUndefinedParameter2(a?: number, b?: number){}
functionWithUndefinedParameter2(1, 2);
functionWithUndefinedParameter2(5);
