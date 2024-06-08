interface Dog {
  bark: "HOOWW";
}

interface Cat {
  meow: "Meyauvv";
}

function makeSound(animal: Cat | Dog) {
  if (isCat(animal)) {
    animal.meow;
  } else {
    animal.bark;
  }
}

function isCat(animal: any): animal is Cat {
  return (animal as Cat).meow !== undefined;
}
