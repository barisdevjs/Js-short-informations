function add(num1: number, num2:number,...num3:number[]) : number { 
    return num1 + num2 + num3.reduce((a, b) => a + b);
}

console.log(add(2,3,...[4,6,3]))