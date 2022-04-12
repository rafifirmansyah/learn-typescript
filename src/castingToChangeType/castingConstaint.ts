const str: string = "123";
const bool: boolean = true;
const castFromString: number = str as unknown as number;
const castFromBoolean: number = bool as unknown as number;

console.log(castFromString);
console.log(castFromBoolean);
