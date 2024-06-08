/* function identity<Type>(arg: Type): Type {
    return arg;
}

let output = identity<string>('output42233');
console.log(identity(output)) */

function getArr<T>(items: T[]): T[] {
  return new Array().concat(items);
}

const numArr = getArr<number>([1, 2, 3, 4]);
//  numArr.push('sds')    this will give an error because  parameters are not valid type

const strArr = getArr<string>(["a", "b", "c"]);
