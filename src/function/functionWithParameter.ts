function funcParams(p1: string, err: (e: Error) => void): void {}
funcParams("test", () => {}); // Parameter e: Error not required
funcParams("test", (whatEver: Error) => {}); // Name can be changed
funcParams("test", (e: Error) => {}); 