let z = 1;
console.log("Outside: " + z);

function myFunction() {
    // console.log("Inside before re-declaring: " + z)
    let z = 2;
    console.log("Inside after re-declaring: " + z);

    if (z === 2) {
        let z = 3;
        console.log("Inside IF : " + z);
        function mySecondFunction() {
            // console.log("Inside-inside before: " + z);
            let z = 4;
            console.log("Inside-inside after : " + z);
        }

        mySecondFunction();
    }
}

myFunction();