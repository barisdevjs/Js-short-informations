/* const condition = false;

const obj = {
    key1: 'value1',
    ...(condition   || {key2: 'value2'})
};
console.log(obj); */



//--- use spread operator to combine objects ---//
/* const obj1 = {'a':1, 'b':2}
const obj2 = {'c':3}
const obj3 = {'d':4}

const combinedObj = {...obj1, ...obj2, ...obj3}
console.log(combinedObj) */

///--- Array.from() ---///

/* const profiles = [ 
    {name:'pratham', followers:100_000},
    {name:'jack', followers:36_000},
    {name:'Santiago', followers:2_000}
]

const profileNames = Array.from(profiles, ({name}) => name)
console.log(profileNames) */


///--- Object Reference ---///    

/* const a = [1];
const b = a;
b.push(2);
console.log(a, b); */

///--- Object Reference           THIS           ---///        

/* const obj = {
    a: this,
    
    b: function () {
        return this;
    },
    c: () => {
        return this;
    },
    d() {
        return this;
    },
    e: function () {
        return this.a;
    }
}

console.log(obj.b) */;

//--- Console. lOGS ---//

/* console.log(1);
setTimeout(()=>console.log(2), 0);
setTimeout(()=>console.log(4), 1);
Promise.resolve().then(()=>console.log(3));
console.log(5); */


//--- Object Deep Copy---//


/* const obj1 = {
    a: 1,
    b: "hello", c: {
        d: "world"
    },
    e: {
        f: {
            g: 100
        }
    }
};

const obj2 = JSON.parse(JSON.stringify(obj1));
const clone = structuredClone(obj1); */
// {...obj1}

/* 
console.log("hello" || "world")
console.log("foo" && "bar") */



// Write an immediately invoked function expression (IIFE)
// that logs "hello world" to the console.

/*     (function () {
        console.log("hello world");
    })(); */


/* Initialize an empty array of length n.
Use Array.prototype.reduce() to add values into the array,
using the sum of the last two values, except for the first two. */

/* const fibonacci = n =>
  [...Array(n)].reduce(
    (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
    []
  ) */

var foo = 1
var foobar = function() {
  console.log(foo)
  var foo = 2
}
foobar()