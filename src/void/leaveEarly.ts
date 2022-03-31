function leaveEarly(leaveFast: boolean) {
    console.log("Hello");

    if (leaveFast) {
        console.log("Quick bye!");
        return;
    }

    console.log("Later good bye");
}

// console.log("-- With true --");
// let returnValue1 = leaveEarly(true);
// console.log("-- With false --");
// let returnValue2 = leaveEarly(false);

// console.log("-- Types --");
// console.log(typeof returnValue1);
// console.log(typeof returnValue2);

function leaveEarly2(leaveFast: boolean): void {
    console.log("Hello");

    if (leaveFast) {
        console.log("Quick bye!");
        return;
    }

    console.log("Later good bye");
}

console.log("-- With true --");
let voidVar1: void = leaveEarly2(true);
console.log("-- With false --");
let voidVar2: void = leaveEarly2(false);

console.log(typeof voidVar1);
console.log(typeof voidVar2);
