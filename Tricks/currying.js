/***************** Currying  ***************/


function add(a) {
    return function(b) {
        return a + b
    }
}

const add2 = a => b => c => a + b + c

console.log(add(3)(4))
console.log(add2(5)(8)(88))

// make an emoji of  apple

