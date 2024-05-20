// what will be the this value

const user = { 
    name: 'aaaa',
    greet() {
        return `Hello , ${this.name}`
    }, 

    farewell: () => {
        return `Goodbye ${this.name} !`
    }
}

/* console.log(user.greet())
console.log(user.farewell()) */


/* const user2 = {
    firstName: 'aaa', 
    getName() {
        const firstName = 'bbb'
        return this.firstName;
    },
}

console.log(user2.getName()) */


/* const user3 = {
    name : 'ccc', 
    logMessage() {
        console.log(this.name)
    }
}

setTimeout(() => console.log(user3.logMessage, 2000))

// prints nothing */

class Calc {
    constructor(num ) {
        this.num = num
    }

     add(x) {
         this.num += x
        return this
    }

     subtract(x) {
         this.num -= x
        return this
    }

     multiply(x) {
         this.num *= x
        return this
    }

     divide(x) {
         this.num /= x
        return this
    }
}

const ddd = new Calc(3)
console.log(((ddd.add(3)).multiply(3)).divide(3/44))