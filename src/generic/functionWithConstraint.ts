interface MyType { // Type that has a single field
  id: number
}

interface AnotherType extends MyType {} // Another type that has all the field from MyType
function genericFunction<T extends MyType>(p1: T) {} // A function that take a generic type that must at least have the fields of MyType
const arg: AnotherType = { id: 2 } // Create an object that is not "MyType"
genericFunction(arg) // This is legit because AnotherType extends MyType, thus has all required fields
genericFunction({ id: 6 }) // This is legit as well since id is the only required field from MyType

// genericFunction("Doesn't compile") // Does not compile, not legit
