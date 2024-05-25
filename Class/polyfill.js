class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log("Animal Sound // Parent");
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  makeSound() {
    super.makeSound();
    console.log("Hav Hav Hav !!! // Child");
  }
}

const animal1 = new Animal("Lion");
const dog1 = new Dog("paşa");

console.log(animal1); // Logs the Animal object
console.log(dog1); // Logs the Dog object
