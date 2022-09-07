

/* function greeter(fn: (a: string) => void) { // it takes a fn with a parameter with a string
    fn("Hello, World");
  }
   
  function printToConsole(s: string) {
    console.log(s);
  }
   
  console.log(greeter(printToConsole)); */


// GENERICS

/* function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}
  console.log(firstElement([1,2,3]));


// s is of type 'string'
const s = firstElement(["a", "b", "c"]);
// n is of type 'number'
const n = firstElement([1, 2, 3]);
// u is of type undefined
const u = firstElement([]);
 */

// OPTIONAL PARAMETERS

/* function f(x?: number) : any{
  return x ? x : undefined
}
console.log(f()); // OK
console.log(f(10)) // OK */


// RETURN LENGTH OF A PARAMETER

/* function len(x: any[] | string) {
  return x.length;
}

console.log(len('sdsdsds'))
console.log(len('sdsdsds'.substring(0,3))) */


// UNKNOWN 

/* function safeParse(s: string): unknown {
  return JSON.parse(s);
} */


      // NEVER 
// Some functions never return a value:


/* function fail(msg: string): never {
  throw new Error(msg);
} */


// REST PARAMETERS && ARGUMENTS

/* function multiply(n: number, ...m: number[]) {
  return m.map((x) => n * x * x);
}
const a = multiply(10, 1, 2, 3, 4); */


// PARAMETER DESTRUCTURING

// Both of them are same



/* function sum({ a, b, c }: { a: number; b: number; c: number }) {
  console.log(a + b + c);
}

type ABC = { a: number; b: number; c: number };
function sum1({ a, b, c }: ABC) {
  console.log(a + b + c);
} */