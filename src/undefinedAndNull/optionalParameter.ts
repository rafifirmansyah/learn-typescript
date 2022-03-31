function function1(a: number|undefined, b: number) {
    console.log(a);
    console.log(b);
}

function function2(a: number, b?: number) {
    console.log(a);
    console.log(b);
}

function1(1, 2);
function1(undefined, 2);
function2(3);
function2(3, undefined);