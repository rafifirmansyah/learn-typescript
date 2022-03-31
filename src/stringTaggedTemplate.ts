function analyzeString(literals: TemplateStringsArray, ...placeholders: any[]) {
    console.log(literals);
    console.log(placeholders);
    let result = "";
    for (let i = 0; i < placeholders.length; i++) {
        result += literals[i];
        result += "*" + placeholders[i] + "*";
    }
    result += literals[literals.length - 1];
    return result;
}

const number = 84;
const number2 = 100;
const endResult = analyzeString`The number is ${number} which is not like the second number ${number2}`;

console.log(endResult);