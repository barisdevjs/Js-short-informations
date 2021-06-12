class Parent {
    constructor(_name, _age) {
        this.name = _name
        this.age = _age
    }

    describe () {
        console.log(`I am ${this.name} and ${this.age} years old.`)
    }
}

class Child  extends Parent{
    constructor (_name, _age, _yearsOfExperince) {
        // from parent
        super(_name, _age);

        // custom behaviour
        this.yearsOfExperince = _yearsOfExperince
    }

    code() {
        console.log(`${this.name} is CODING`)
    }
}

const programmers = [ new Child('AAA', 50, 5), new Child('BBB', 30, 8)]

let parent1 = new Parent('Cahit', 60)
let children1 = new Child('Barış', 31, 2)
children1.code()
// parent1.code()  it is unique for children
parent1.describe()

console.log(parent1)
console.log(children1)
function developSofware(programmers) {
    for (const programmer of programmers) {
        programmer.code()
    }
}

developSofware(programmers)