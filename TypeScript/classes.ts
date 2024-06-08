class Person {
    id: number;
    private name: string;

    constructor( id: number, name: string) {
        this.id = id;
        this.name = name;
        console.log(`I will print this id : ${this.id} whenever new Person() is called`)
    }

    register() {
        return `${this.name} is registered` 
    }
}

const brad = new Person(555, 'Brad') 
brad.register()
console.log(brad)
console.log(brad.register())


class Employee extends Person {
    position : string;

    constructor( id: number, name: string, position:string) {
        super(id,name)
        this.position = position;
    }
}

const employeeNew = new Employee(111, 'Barış','BIGA')
employeeNew.register()

console.log(employeeNew)
console.log(employeeNew.register())