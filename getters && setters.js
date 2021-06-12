class Square {
    constructor(_width) {
        this.width = _width;
        this.height = _width;
        this.requestsOfArea = 0;
    }

    get area() {
        this.requestsOfArea++
        return this.width * this.height  // getter 

    }

    set area ( area) {
        this.width = Math.sqrt(area)
        this.height = Math.sqrt(area)
    }
}

let sqOne = new Square(4)
sqOne.area = 25
console.log(sqOne.width)
console.log(sqOne.height)
console.log(sqOne.area)
console.log(sqOne.area)
console.log(sqOne.requestsOfArea) // it works only if you call area method we call it twice