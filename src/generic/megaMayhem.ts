interface Greeter {
  greeting: string;
}

class Human3 implements Greeter {
  public humanFunction() {
    console.log("Executing a human function");
  }

  public greeting: string = "Hello";
} 

class Lion3 implements Greeter {
  public greeting: string = "Grrrrr";
  public lionAttack() {
    console.log("Attacking like a lion");
  }
}

class Tulip3 implements Greeter {
  public greeting: string = "....";
  public lookingGood() {
    console.log("Snazzy Flower am I");
  }
}

class LivingSpecies2 {
  public species: Greeter; // Reference to interface Greeter

  constructor(species: Greeter) {
    this.species = species;
  }

  public getSpecies() {
    return this.species;
  }
}

// const speciesX = new LivingSpecies2(new Human());
// speciesX.getSpecies().humanFunction();

// const speciesY = new LivingSpecies2(new Lion());
// speciesY.getSpecies().lionAttack();

// const speciesZ = new LivingSpecies2(new Human());
// speciesZ.getSpecies().lookingGood();