// Three classes
class Human {
  public greeting: string = "Hello";
}

class Lion {
  public greeting: string = "Grrrr";
}

class Tulip {
  public greeting: string = "...";
}

// The class needs to use a spesifies but is limited to Human
class LivingSpecies_1 {
  public species: Human; // Human only :(

  constructor(species: Human) { // Human only :(
    this.species = species;
  }

  public sayHello(): void {
    console.log(this.species.greeting);
  }
}

const species1 = new LivingSpecies_1(new Human());
species1.sayHello();

const species2 = new LivingSpecies_1({greeting: "test"});

species2.sayHello();