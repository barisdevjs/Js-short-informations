/* -- SET --*/

/* const set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.size;  */

/* -- MAP   --*/
// can be used in linked lists
const myMap = new Map([
  [{}, "a"],
  [{}, "b"],
]);
myMap.set(3, "w");
console.log(myMap.get(3));
myMap.forEach((value, key) => console.log(value, key));

console.log(myMap);

myMap.has(1);

/*  -- Debugger usage --*/

const arr = [1, 2, "str", () => null, {}, true];
const [first, second, third, fourth, fifth, sixth] = arr;
debugger;

/* -- END   --*/
