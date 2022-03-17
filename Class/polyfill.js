class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log('Animal Sound // Parent')
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name)
    }

    makeSound() {
        super.makeSound()
        console.log('Hav Hav Hav !!! // Child')
    }
}

const a1 = new Animal('Lion')
const d1 = new Dog('paşa')

console.log(a1)
console.log(d1)
console.log(d1.makeSound())
console.log(a1.makeSound())

