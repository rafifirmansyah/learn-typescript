class ClassA {
  private a1: number = 1;
  protected a2fct(): void {
    console.log(this.a1);
  }
}

class ClassB extends ClassA {
  private b1: number = 2;
  protected b2(): void {
    super.a2fct(); // Call a protected function from a base class
  }
}

const cab = new ClassB();
// cab. // No access to b2 or a2fct