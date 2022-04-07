// it is always give the same result 
// You can't use Math.random() or date/time's with pure functions
// no mutation on parameters


function multiply(num) {
    return num * 2
}


/*************** Object assigning and changing  ********** ************/

const person = { name: "John", birth: "1982-01-01" }
const updated = { ...person, name: 'Matt' }

console.log(person, updated)

////////////////////////////////////////////////////////

const a = { name: 'XXX', birth: '2020' }
a.name = 'YYY' // it was mutated
console.log(a)

const person3 = {
    name: 'Jane', birth: 2121, colors: {
        one: 'red',
        two: 'blue'
    }
}

// we are making a deep copy to get rid of reference issues
// every object inside an object must be redeclared with by ... rest operator
const person4 = {
    ...person3,
    colors: {
        ...person3.colors,
        two: 'green'
    }
}

console.log(person3)
console.log(person4)


