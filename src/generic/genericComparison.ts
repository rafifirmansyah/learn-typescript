class IdentificatedGeneric<S> extends Array<S> {
  public id: string; // Enhancement of Array class
  public constructor(id: string) {
    super();
    this.id = id;
  }
}

function concatenate<S, T1 extends IdentificatedGeneric<S>>(list1: T1, list2: T1): T1 {
  if (list1.id === list2.id) {  // Comparison to ensure from the same id, possible because both extends IdentificatedGeneric
    const oneList = [...list1, ...list2] as T1;

    return oneList;
  }

  throw Error("Must be the same id");
}

const l1 = new IdentificatedGeneric<string>("l1");
const l2 = new IdentificatedGeneric<string>("l2");
const l3 = new IdentificatedGeneric<number>("l1");
const l4 = new IdentificatedGeneric<string>("l1");

l1.push("1", "2");
l2.push("100", "200");
l3.push(5, 6);
l4.push("500", "600");

const c3 = concatenate(l1, l4);
console.log(l1);
