function identity<Type>(arg: Type): Type {
    return arg;
}

let output = identity<string>('output42233');
console.log(identity(output))