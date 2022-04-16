enum Power {
  None = 0, // Value 0 in decimal (00 in binary)
  Invincibility = 1 << 0, // Value 1 in decimal (01 in binary)
  Telepathy = 1 << 1, // Value 2 in decimal (10 in binary)
  Invisibility = 1 << 3, // Value 2 in decimal (11 in binary)
  Everything = Invincibility | Telepathy | Invisibility,
}

let power: Power = Power.Invincibility | Power.Telepathy;
console.log("Power values:" + power);
if (Power.Telepathy === (power & Power.Telepathy)) {
  console.log("Power of telepathy available");
}

// Removing telepathy
power &= ~Power.Telepathy;

console.log("Power values:" + power);
if (Power.Telepathy === (power & Power.Telepathy)) {
  console.log("Power of telepathy available");
}

power |= 111;
console.log("Power values:" + power);
if (power & Power.Everything) {
  console.log("Everything");
}
