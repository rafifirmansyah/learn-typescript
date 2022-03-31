declare function ajaxCall(): number | boolean;
let data: number | boolean = ajaxCall();

if (typeof data == "number") {
    console.log(`The data is a number type: ${typeof data}`);
} else if (typeof data == 'boolean') {
    console.log(`The data is a boolean type ${typeof data}`);
} else {
    console.log(`Impossible ELSE case: ${typeof data}`); // Hover data here
}