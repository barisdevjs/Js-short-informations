var myFunc = function() {
    let number = 30;
    console.log('let' , number);
}

function myFunc() {
    var number = 50;
    if (false) {
        let number = 100;
}
    console.log('func',number);
}
myFunc();

// 50
// 30 30



