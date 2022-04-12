function getValue(): string | undefined {
  if (Math.random() > 0.5) {
    return undefined;
  }

  return "Good";
}

// Shortcut statement of if 
let value = getValue() ?? "Default"; // Check if function is thurty
console.log(value);