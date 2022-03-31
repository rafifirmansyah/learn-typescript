function mainFunction3() {
    let innerFunction;
    let listFunctions = [];

    for (let i = 10; i < 15; i++) {
        innerFunction = function (param1: number) {
            return param1;
        }
        listFunctions.push(innerFunction(i));
    }

    for (let k = 0; k < 5; k++) {
        console.log(listFunctions[k]);
    }
}

// mainFunction3();
function mainFunction4() {
    let innerFunction;
    let listFunctions = [];

    for (let i = 10; i < 15; i++) {
        innerFunction = (function(param1: number) {
            let f = function() {
                return param1;
            }

            return f;
        })(i * 100);
        listFunctions.push(innerFunction);
    }

    for (let k = 0; k < 5; k++) {
        console.log(listFunctions[k]());
    }
}

mainFunction4();