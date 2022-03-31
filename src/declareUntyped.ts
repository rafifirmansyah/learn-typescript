declare let variableDefinedSomewhereElse: number;
let newVariable = variableDefinedSomewhereElse + 1;

// declare let $: JQuery;
// export default $;

declare function ambientFunction(i: number):void;

function myFunction(i: number) {
    ambientFunction(1);
}
