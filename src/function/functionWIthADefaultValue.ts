function funcWithDefault(p1: string = "v1", p2?: number, p3 = true) {
  console.log("P1", p1);
  console.log("P2", p2);
  console.log("P3", p3);
}

funcWithDefault(undefined);