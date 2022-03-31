interface SuperHero {
  attackName: string;
}

interface Batman extends SuperHero {
  jumpLength: number;
}

interface Superman extends SuperHero {
  flyingSpeed: number;
}

function createSuperHero(name: "batman"): Batman;
function createSuperHero(name: "superman"): Superman;
function createSuperHero(name: string): Batman | Superman | SuperHero {
  if (name === "batman") {
    return {
      attackName: "Kick",
      jumpLength: 12
    }
  } else if (name === "superman") {
    return {
      attackName: "Punch",
      flyingSpeed: 120,
    }
  }

  return {
    attackName: "Run"
  };
}

const hero1 = createSuperHero("batman");
console.log(`Batman can jump ${hero1.jumpLength} feet`);
const hero2 = createSuperHero("superman");
console.log(`Superman can fly ${hero2.flyingSpeed} miles per hour`);