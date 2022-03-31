// Three classes that inherit a common one
interface Greeter {
  greeting: string;
}

class Human2 implements Greeter { // Implement the common interface
  public greeting: string = "Hello";
}

class Lion2 implements Greeter { // Implement the common interface
  public greeting: string = "Grrrrrr";
}

class Tulip2 { // Does not implement the common interface
  public greeting: string = "...";
}

// Not limited to Human! Now any type that inherits Greeter
class LivingSpecies {
  public species: Greeter;

  constructor(species: Greeter) {
    this.species = species;
  }

  public sayHello(): void {
    console.log(this.species.greeting);
  }
}

const speciesA = new LivingSpecies(new Human2());
speciesA.sayHello();

const speciesB = new LivingSpecies(new Lion2());
speciesB.sayHello();

const speciesC = new LivingSpecies(new Tulip2());
speciesC.sayHello();

