function mainFunction2() {
    let innerFunction;
    if (true) {
        // Environment for capturing start here
        let variableCapturedByTheInnerFunction = "AvailableToTheInnerFunction";
        innerFunction = function() {
            return variableCapturedByTheInnerFunction;
        } // Environment for capturing stop here
        variableCapturedByTheInnerFunction = "Changed";
    }

    return innerFunction();
}

console.log(mainFunction2());