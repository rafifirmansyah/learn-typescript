class ClassC {
  private a1: number = 1;
  public a2fct(): void  {
    console.log(this.a1);
  }
}

class ClassD extends ClassC {
  private b1: number = 2;
  public b2(): void {
    super.a2fct();
  }
}

const cd = new ClassD();

cd.a2fct();
cd.b2();
