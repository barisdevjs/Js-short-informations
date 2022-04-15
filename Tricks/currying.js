/***************** Currying  ***************/


function add(a) {
    return function(b) {
        return a + b
    }
}

console.log(add(2)(4)) 

const add2 = a => b => a + b

console.log(add2(3)(4))

// make an emoji of  apple

