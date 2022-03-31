interface Family {
  names: string[];
  emotion: string;
  print: () => void;
}

const family: Family = {
  names: ["Patrick", "Alicia", "Melodi"],
  emotion: "Love",
  print: function() {
    console.log("print", this); // this = the family object
    return this.names.forEach( _ => {
      console.log("forEach", this);
    });
  }
}

family.print();