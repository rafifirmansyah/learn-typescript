function arrayMap<T, U>(f: (x: T) => U): (a: T[]) => U[] {
  return a => a.map(f);
}

const lengths: (a: string[]) => number[] = arrayMap(s => s.length);

console.log(lengths);