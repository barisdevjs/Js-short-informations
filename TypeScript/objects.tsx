// ALL OF THEM ARE VALID


/* interface Person0 {
    name: string;
    age: number;
}

function greet0(person: Person0) {
    return "Hello " + person.name;
}



type Person1 = {
    name: string;
    age: number;
};

function greet1(person: Person1) {
    return "Hello " + person.name;
}



function greet(person: { name: string; age: number }) {
    return "Hello " + person.name;
} */


// READONLY

/* interface Home {
    readonly resident: { name: string; age: number };
  }
   
  function visitForBirthday(home: Home) {
    // We can read and update properties from 'home.resident'.
    console.log(`Happy birthday ${home.resident.name}!`);
    home.resident.age++;
  }

  let obj: Home = { name: "Barış", age:33} // ERROR

  console.log(visitForBirthday(obj)) */


  // EXTENDS 

/*   interface BasicAddress {
    name?: string;
    street: string;
    city: string;
    country: string;
    postalCode: string;
  }
   
  interface AddressWithUnit extends BasicAddress {
    unit: string;
  }


  const obj : AddressWithUnit = {name :'A', street:'B', city:'C', country:'D', postalCode:'E', unit: 'F'}
  console.log( obj ) */


// THE ARRAY TYPE


/* function doSomething(value: Array<string>) {
    // ...
  }
   
  let myArray: string[] = ["hello", "world"];
   
  // either of these work!
  doSomething(myArray);
  doSomething(new Array("hello", "world")); */



  // READONLY ARRAY

/*   function doStuff(values: readonly string[]) {
    // We can read from 'values'...
    const copy = values.slice();
    console.log(`The first value is ${values[0]}`);
   
    // ...but we can't mutate 'values'.
    values.push("hello!");
 // Property 'push' does not exist on type 'readonly string[]'.
  } */


  // TUPLES

/*   type Either2dOr3d = [number, number, number?];
 
function setCoordinate(coord: Either2dOr3d) : void {
  const [x, y, z] = coord;
              
  console.log(`Provided coordinates had ${coord.length} dimensions`);
}

setCoordinate([1,1,1]) */


/* function readButtonInput(...args: [string, number, ...boolean[]]) {
    const [name, version, ...input] = args;
    // ...
  }

  // is basically equivalent to :

  function readButtonInput1(name: string, version: number, ...input: boolean[]) {
    // ...
  } */
