interface Greeter {
  greeting: string;
}

class Human4 implements Greeter {
  public humanFunction() {
    console.log("Executing a human function");
  }

  public greeting: string = "Hello";
} 

class Lion4 implements Greeter {
  public greeting: string = "Grrrrr";
  public lionAttack() {
    console.log("Attacking like a lion");
  }
}

class Tulip4 implements Greeter {
  public greeting: string = "....";
  public lookingGood() {
    console.log("Snazzy Flower am I");
  }
}

class LivingSpecies3<T> {
  public species: T;

  constructor(species: T) {
    this.species = species;
  }

  public getSpecies() {
    return this.species;
  }
}

const speciesX = new LivingSpecies3(new Human4());
speciesX.getSpecies().humanFunction();

const speciesY = new LivingSpecies3(new Lion4());
speciesY.getSpecies().lionAttack();

const speciesZ = new LivingSpecies3(new Tulip4());
speciesZ.getSpecies().lookingGood();